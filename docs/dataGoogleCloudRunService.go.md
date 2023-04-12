# `dataGoogleCloudRunService` Submodule <a name="`dataGoogleCloudRunService` Submodule" id="@cdktf/provider-google.dataGoogleCloudRunService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudRunService <a name="DataGoogleCloudRunService" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service google_cloud_run_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunService(scope Construct, id *string, config DataGoogleCloudRunServiceConfig) DataGoogleCloudRunService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig">DataGoogleCloudRunServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig">DataGoogleCloudRunServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.DataGoogleCloudRunService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.DataGoogleCloudRunService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.DataGoogleCloudRunService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.autogenerateRevisionName">AutogenerateRevisionName</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList">DataGoogleCloudRunServiceMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList">DataGoogleCloudRunServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList">DataGoogleCloudRunServiceTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.traffic">Traffic</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList">DataGoogleCloudRunServiceTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutogenerateRevisionName`<sup>Required</sup> <a name="AutogenerateRevisionName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.autogenerateRevisionName"></a>

```go
func AutogenerateRevisionName() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.metadata"></a>

```go
func Metadata() DataGoogleCloudRunServiceMetadataList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList">DataGoogleCloudRunServiceMetadataList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.status"></a>

```go
func Status() DataGoogleCloudRunServiceStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList">DataGoogleCloudRunServiceStatusList</a>

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.template"></a>

```go
func Template() DataGoogleCloudRunServiceTemplateList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList">DataGoogleCloudRunServiceTemplateList</a>

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.traffic"></a>

```go
func Traffic() DataGoogleCloudRunServiceTrafficList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList">DataGoogleCloudRunServiceTrafficList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudRunServiceConfig <a name="DataGoogleCloudRunServiceConfig" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.name">Name</a></code> | <code>*string</code> | Name must be unique within a Google Cloud project and region. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service#id DataGoogleCloudRunService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service#project DataGoogleCloudRunService#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service#location DataGoogleCloudRunService#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name must be unique within a Google Cloud project and region.

Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: http://kubernetes.io/docs/user-guide/identifiers#names

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service#name DataGoogleCloudRunService#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service#id DataGoogleCloudRunService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloud_run_service#project DataGoogleCloudRunService#project}.

---

### DataGoogleCloudRunServiceMetadata <a name="DataGoogleCloudRunServiceMetadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceMetadata {

}
```


### DataGoogleCloudRunServiceStatus <a name="DataGoogleCloudRunServiceStatus" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceStatus {

}
```


### DataGoogleCloudRunServiceStatusConditions <a name="DataGoogleCloudRunServiceStatusConditions" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceStatusConditions {

}
```


### DataGoogleCloudRunServiceTemplate <a name="DataGoogleCloudRunServiceTemplate" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplate {

}
```


### DataGoogleCloudRunServiceTemplateMetadata <a name="DataGoogleCloudRunServiceTemplateMetadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateMetadata {

}
```


### DataGoogleCloudRunServiceTemplateSpec <a name="DataGoogleCloudRunServiceTemplateSpec" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpec {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainers <a name="DataGoogleCloudRunServiceTemplateSpecContainers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainers {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnv <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnv" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersEnv {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersPorts <a name="DataGoogleCloudRunServiceTemplateSpecContainersPorts" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersPorts {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersResources <a name="DataGoogleCloudRunServiceTemplateSpecContainersResources" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersResources {

}
```


### DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts <a name="DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts {

}
```


### DataGoogleCloudRunServiceTemplateSpecVolumes <a name="DataGoogleCloudRunServiceTemplateSpecVolumes" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecVolumes {

}
```


### DataGoogleCloudRunServiceTemplateSpecVolumesSecret <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecret" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecVolumesSecret {

}
```


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems {

}
```


### DataGoogleCloudRunServiceTraffic <a name="DataGoogleCloudRunServiceTraffic" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

&datagooglecloudrunservice.DataGoogleCloudRunServiceTraffic {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudRunServiceMetadataList <a name="DataGoogleCloudRunServiceMetadataList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceMetadataOutputReference <a name="DataGoogleCloudRunServiceMetadataOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.annotations">Annotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata">DataGoogleCloudRunServiceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.annotations"></a>

```go
func Annotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata">DataGoogleCloudRunServiceMetadata</a>

---


### DataGoogleCloudRunServiceStatusConditionsList <a name="DataGoogleCloudRunServiceStatusConditionsList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceStatusConditionsOutputReference <a name="DataGoogleCloudRunServiceStatusConditionsOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions">DataGoogleCloudRunServiceStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions">DataGoogleCloudRunServiceStatusConditions</a>

---


### DataGoogleCloudRunServiceStatusList <a name="DataGoogleCloudRunServiceStatusList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceStatusOutputReference <a name="DataGoogleCloudRunServiceStatusOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList">DataGoogleCloudRunServiceStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestCreatedRevisionName">LatestCreatedRevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestReadyRevisionName">LatestReadyRevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.observedGeneration">ObservedGeneration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus">DataGoogleCloudRunServiceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.conditions"></a>

```go
func Conditions() DataGoogleCloudRunServiceStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList">DataGoogleCloudRunServiceStatusConditionsList</a>

---

##### `LatestCreatedRevisionName`<sup>Required</sup> <a name="LatestCreatedRevisionName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestCreatedRevisionName"></a>

```go
func LatestCreatedRevisionName() *string
```

- *Type:* *string

---

##### `LatestReadyRevisionName`<sup>Required</sup> <a name="LatestReadyRevisionName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestReadyRevisionName"></a>

```go
func LatestReadyRevisionName() *string
```

- *Type:* *string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.observedGeneration"></a>

```go
func ObservedGeneration() *f64
```

- *Type:* *f64

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus">DataGoogleCloudRunServiceStatus</a>

---


### DataGoogleCloudRunServiceTemplateList <a name="DataGoogleCloudRunServiceTemplateList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateMetadataList <a name="DataGoogleCloudRunServiceTemplateMetadataList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateMetadataOutputReference <a name="DataGoogleCloudRunServiceTemplateMetadataOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.annotations">Annotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata">DataGoogleCloudRunServiceTemplateMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.annotations"></a>

```go
func Annotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata">DataGoogleCloudRunServiceTemplateMetadata</a>

---


### DataGoogleCloudRunServiceTemplateOutputReference <a name="DataGoogleCloudRunServiceTemplateOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList">DataGoogleCloudRunServiceTemplateMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList">DataGoogleCloudRunServiceTemplateSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate">DataGoogleCloudRunServiceTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.metadata"></a>

```go
func Metadata() DataGoogleCloudRunServiceTemplateMetadataList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList">DataGoogleCloudRunServiceTemplateMetadataList</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.spec"></a>

```go
func Spec() DataGoogleCloudRunServiceTemplateSpecList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList">DataGoogleCloudRunServiceTemplateSpecList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate">DataGoogleCloudRunServiceTemplate</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReference">LocalObjectReference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optional">Optional</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalObjectReference`<sup>Required</sup> <a name="LocalObjectReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReference"></a>

```go
func LocalObjectReference() DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList</a>

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optional"></a>

```go
func Optional() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvFromList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRef">ConfigMapRef</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigMapRef`<sup>Required</sup> <a name="ConfigMapRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRef"></a>

```go
func ConfigMapRef() DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `SecretRef`<sup>Required</sup> <a name="SecretRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRef"></a>

```go
func SecretRef() DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReference">LocalObjectReference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optional">Optional</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalObjectReference`<sup>Required</sup> <a name="LocalObjectReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReference"></a>

```go
func LocalObjectReference() DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList</a>

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optional"></a>

```go
func Optional() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv">DataGoogleCloudRunServiceTemplateSpecContainersEnv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFrom"></a>

```go
func ValueFrom() DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersEnv
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv">DataGoogleCloudRunServiceTemplateSpecContainersEnv</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRef"></a>

```go
func SecretKeyRef() DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersList <a name="DataGoogleCloudRunServiceTemplateSpecContainersList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList">DataGoogleCloudRunServiceTemplateSpecContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envFrom">EnvFrom</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList">DataGoogleCloudRunServiceTemplateSpecContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList">DataGoogleCloudRunServiceTemplateSpecContainersResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.workingDir">WorkingDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers">DataGoogleCloudRunServiceTemplateSpecContainers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.env"></a>

```go
func Env() DataGoogleCloudRunServiceTemplateSpecContainersEnvList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList">DataGoogleCloudRunServiceTemplateSpecContainersEnvList</a>

---

##### `EnvFrom`<sup>Required</sup> <a name="EnvFrom" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envFrom"></a>

```go
func EnvFrom() DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.ports"></a>

```go
func Ports() DataGoogleCloudRunServiceTemplateSpecContainersPortsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList">DataGoogleCloudRunServiceTemplateSpecContainersPortsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.resources"></a>

```go
func Resources() DataGoogleCloudRunServiceTemplateSpecContainersResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList">DataGoogleCloudRunServiceTemplateSpecContainersResourcesList</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList</a>

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.workingDir"></a>

```go
func WorkingDir() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainers
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers">DataGoogleCloudRunServiceTemplateSpecContainers</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersPortsList <a name="DataGoogleCloudRunServiceTemplateSpecContainersPortsList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts">DataGoogleCloudRunServiceTemplateSpecContainersPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersPorts
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts">DataGoogleCloudRunServiceTemplateSpecContainersPorts</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersResourcesList <a name="DataGoogleCloudRunServiceTemplateSpecContainersResourcesList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limits">Limits</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requests">Requests</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources">DataGoogleCloudRunServiceTemplateSpecContainersResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limits"></a>

```go
func Limits() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requests"></a>

```go
func Requests() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources">DataGoogleCloudRunServiceTemplateSpecContainersResources</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList <a name="DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts</a>

---


### DataGoogleCloudRunServiceTemplateSpecList <a name="DataGoogleCloudRunServiceTemplateSpecList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containerConcurrency">ContainerConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList">DataGoogleCloudRunServiceTemplateSpecContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.serviceAccountName">ServiceAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.servingState">ServingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList">DataGoogleCloudRunServiceTemplateSpecVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec">DataGoogleCloudRunServiceTemplateSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerConcurrency`<sup>Required</sup> <a name="ContainerConcurrency" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containerConcurrency"></a>

```go
func ContainerConcurrency() *f64
```

- *Type:* *f64

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containers"></a>

```go
func Containers() DataGoogleCloudRunServiceTemplateSpecContainersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList">DataGoogleCloudRunServiceTemplateSpecContainersList</a>

---

##### `ServiceAccountName`<sup>Required</sup> <a name="ServiceAccountName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.serviceAccountName"></a>

```go
func ServiceAccountName() *string
```

- *Type:* *string

---

##### `ServingState`<sup>Required</sup> <a name="ServingState" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.servingState"></a>

```go
func ServingState() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.volumes"></a>

```go
func Volumes() DataGoogleCloudRunServiceTemplateSpecVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList">DataGoogleCloudRunServiceTemplateSpecVolumesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec">DataGoogleCloudRunServiceTemplateSpec</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes">DataGoogleCloudRunServiceTemplateSpecVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.secret"></a>

```go
func Secret() DataGoogleCloudRunServiceTemplateSpecVolumesSecretList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecVolumes
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes">DataGoogleCloudRunServiceTemplateSpecVolumes</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.mode">Mode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.mode"></a>

```go
func Mode() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecVolumesSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTemplateSpecVolumesSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret">DataGoogleCloudRunServiceTemplateSpecVolumesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultMode"></a>

```go
func DefaultMode() *f64
```

- *Type:* *f64

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.items"></a>

```go
func Items() DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList</a>

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTemplateSpecVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret">DataGoogleCloudRunServiceTemplateSpecVolumesSecret</a>

---


### DataGoogleCloudRunServiceTrafficList <a name="DataGoogleCloudRunServiceTrafficList" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTrafficList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudRunServiceTrafficList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.get"></a>

```go
func Get(index *f64) DataGoogleCloudRunServiceTrafficOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudRunServiceTrafficOutputReference <a name="DataGoogleCloudRunServiceTrafficOutputReference" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudrunservice"

datagooglecloudrunservice.NewDataGoogleCloudRunServiceTrafficOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudRunServiceTrafficOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.latestRevision">LatestRevision</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.revisionName">RevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic">DataGoogleCloudRunServiceTraffic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.latestRevision"></a>

```go
func LatestRevision() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `RevisionName`<sup>Required</sup> <a name="RevisionName" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.revisionName"></a>

```go
func RevisionName() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudRunServiceTraffic
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic">DataGoogleCloudRunServiceTraffic</a>

---



