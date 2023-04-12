# `vertexAiEndpoint` Submodule <a name="`vertexAiEndpoint` Submodule" id="@cdktf/provider-google.vertexAiEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiEndpoint <a name="VertexAiEndpoint" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint google_vertex_ai_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpoint(scope Construct, id *string, config VertexAiEndpointConfig) VertexAiEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig">VertexAiEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig">VertexAiEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value VertexAiEndpointEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts">VertexAiEndpointTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.VertexAiEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.VertexAiEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.VertexAiEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.deployedModels">DeployedModels</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList">VertexAiEndpointDeployedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference">VertexAiEndpointEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.modelDeploymentMonitoringJob">ModelDeploymentMonitoringJob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference">VertexAiEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeployedModels`<sup>Required</sup> <a name="DeployedModels" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.deployedModels"></a>

```go
func DeployedModels() VertexAiEndpointDeployedModelsList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList">VertexAiEndpointDeployedModelsList</a>

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.encryptionSpec"></a>

```go
func EncryptionSpec() VertexAiEndpointEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference">VertexAiEndpointEncryptionSpecOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ModelDeploymentMonitoringJob`<sup>Required</sup> <a name="ModelDeploymentMonitoringJob" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.modelDeploymentMonitoringJob"></a>

```go
func ModelDeploymentMonitoringJob() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.timeouts"></a>

```go
func Timeouts() VertexAiEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference">VertexAiEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() VertexAiEndpointEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiEndpointConfig <a name="VertexAiEndpointConfig" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

&vertexaiendpoint.VertexAiEndpointConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	Name: *string,
	Description: *string,
	EncryptionSpec: github.com/cdktf/cdktf-provider-google-go/google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec,
	Id: *string,
	Labels: *map[string]*string,
	Network: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.vertexAiEndpoint.VertexAiEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the Endpoint. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Endpoint. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#id VertexAiEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize your Endpoints. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.network">Network</a></code> | <code>*string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#project VertexAiEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts">VertexAiEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required.

The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#display_name VertexAiEndpoint#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#location VertexAiEndpoint#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the Endpoint.

The name must be numeric with no leading zeros and can be at most 10 digits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#name VertexAiEndpoint#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#description VertexAiEndpoint#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.encryptionSpec"></a>

```go
EncryptionSpec VertexAiEndpointEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#encryption_spec VertexAiEndpoint#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#id VertexAiEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize your Endpoints.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#labels VertexAiEndpoint#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#network VertexAiEndpoint#network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#project VertexAiEndpoint#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointConfig.property.timeouts"></a>

```go
Timeouts VertexAiEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts">VertexAiEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#timeouts VertexAiEndpoint#timeouts}

---

### VertexAiEndpointDeployedModels <a name="VertexAiEndpointDeployedModels" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

&vertexaiendpoint.VertexAiEndpointDeployedModels {

}
```


### VertexAiEndpointDeployedModelsAutomaticResources <a name="VertexAiEndpointDeployedModelsAutomaticResources" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

&vertexaiendpoint.VertexAiEndpointDeployedModelsAutomaticResources {

}
```


### VertexAiEndpointDeployedModelsDedicatedResources <a name="VertexAiEndpointDeployedModelsDedicatedResources" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

&vertexaiendpoint.VertexAiEndpointDeployedModelsDedicatedResources {

}
```


### VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs <a name="VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

&vertexaiendpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs {

}
```


### VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec <a name="VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

&vertexaiendpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec {

}
```


### VertexAiEndpointDeployedModelsPrivateEndpoints <a name="VertexAiEndpointDeployedModelsPrivateEndpoints" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

&vertexaiendpoint.VertexAiEndpointDeployedModelsPrivateEndpoints {

}
```


### VertexAiEndpointEncryptionSpec <a name="VertexAiEndpointEncryptionSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

&vertexaiendpoint.VertexAiEndpointEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#kms_key_name VertexAiEndpoint#kms_key_name}

---

### VertexAiEndpointTimeouts <a name="VertexAiEndpointTimeouts" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

&vertexaiendpoint.VertexAiEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#create VertexAiEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#delete VertexAiEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#update VertexAiEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#create VertexAiEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#delete VertexAiEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_endpoint#update VertexAiEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiEndpointDeployedModelsAutomaticResourcesList <a name="VertexAiEndpointDeployedModelsAutomaticResourcesList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsAutomaticResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiEndpointDeployedModelsAutomaticResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.get"></a>

```go
func Get(index *f64) VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference <a name="VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsAutomaticResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResources">VertexAiEndpointDeployedModelsAutomaticResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *f64
```

- *Type:* *f64

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiEndpointDeployedModelsAutomaticResources
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResources">VertexAiEndpointDeployedModelsAutomaticResources</a>

---


### VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList <a name="VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get"></a>

```go
func Get(index *f64) VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference <a name="VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target">Target</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs">VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target"></a>

```go
func Target() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs">VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs</a>

---


### VertexAiEndpointDeployedModelsDedicatedResourcesList <a name="VertexAiEndpointDeployedModelsDedicatedResourcesList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsDedicatedResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiEndpointDeployedModelsDedicatedResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.get"></a>

```go
func Get(index *f64) VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList <a name="VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get"></a>

```go
func Get(index *f64) VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference <a name="VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec">VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec">VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec</a>

---


### VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference <a name="VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsDedicatedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.autoscalingMetricSpecs">AutoscalingMetricSpecs</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList">VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList">VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResources">VertexAiEndpointDeployedModelsDedicatedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingMetricSpecs`<sup>Required</sup> <a name="AutoscalingMetricSpecs" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.autoscalingMetricSpecs"></a>

```go
func AutoscalingMetricSpecs() VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList">VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.machineSpec"></a>

```go
func MachineSpec() VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList">VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList</a>

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *f64
```

- *Type:* *f64

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiEndpointDeployedModelsDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResources">VertexAiEndpointDeployedModelsDedicatedResources</a>

---


### VertexAiEndpointDeployedModelsList <a name="VertexAiEndpointDeployedModelsList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiEndpointDeployedModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.get"></a>

```go
func Get(index *f64) VertexAiEndpointDeployedModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiEndpointDeployedModelsOutputReference <a name="VertexAiEndpointDeployedModelsOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiEndpointDeployedModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.automaticResources">AutomaticResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList">VertexAiEndpointDeployedModelsAutomaticResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.dedicatedResources">DedicatedResources</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList">VertexAiEndpointDeployedModelsDedicatedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.enableAccessLogging">EnableAccessLogging</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.enableContainerLogging">EnableContainerLogging</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.modelVersionId">ModelVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.privateEndpoints">PrivateEndpoints</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList">VertexAiEndpointDeployedModelsPrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.sharedResources">SharedResources</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModels">VertexAiEndpointDeployedModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticResources`<sup>Required</sup> <a name="AutomaticResources" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.automaticResources"></a>

```go
func AutomaticResources() VertexAiEndpointDeployedModelsAutomaticResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsAutomaticResourcesList">VertexAiEndpointDeployedModelsAutomaticResourcesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DedicatedResources`<sup>Required</sup> <a name="DedicatedResources" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.dedicatedResources"></a>

```go
func DedicatedResources() VertexAiEndpointDeployedModelsDedicatedResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsDedicatedResourcesList">VertexAiEndpointDeployedModelsDedicatedResourcesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableAccessLogging`<sup>Required</sup> <a name="EnableAccessLogging" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.enableAccessLogging"></a>

```go
func EnableAccessLogging() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableContainerLogging`<sup>Required</sup> <a name="EnableContainerLogging" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.enableContainerLogging"></a>

```go
func EnableContainerLogging() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `ModelVersionId`<sup>Required</sup> <a name="ModelVersionId" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.modelVersionId"></a>

```go
func ModelVersionId() *string
```

- *Type:* *string

---

##### `PrivateEndpoints`<sup>Required</sup> <a name="PrivateEndpoints" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.privateEndpoints"></a>

```go
func PrivateEndpoints() VertexAiEndpointDeployedModelsPrivateEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList">VertexAiEndpointDeployedModelsPrivateEndpointsList</a>

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `SharedResources`<sup>Required</sup> <a name="SharedResources" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.sharedResources"></a>

```go
func SharedResources() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiEndpointDeployedModels
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModels">VertexAiEndpointDeployedModels</a>

---


### VertexAiEndpointDeployedModelsPrivateEndpointsList <a name="VertexAiEndpointDeployedModelsPrivateEndpointsList" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsPrivateEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiEndpointDeployedModelsPrivateEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.get"></a>

```go
func Get(index *f64) VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference <a name="VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointDeployedModelsPrivateEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.explainHttpUri">ExplainHttpUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.healthHttpUri">HealthHttpUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.predictHttpUri">PredictHttpUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpoints">VertexAiEndpointDeployedModelsPrivateEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExplainHttpUri`<sup>Required</sup> <a name="ExplainHttpUri" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.explainHttpUri"></a>

```go
func ExplainHttpUri() *string
```

- *Type:* *string

---

##### `HealthHttpUri`<sup>Required</sup> <a name="HealthHttpUri" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.healthHttpUri"></a>

```go
func HealthHttpUri() *string
```

- *Type:* *string

---

##### `PredictHttpUri`<sup>Required</sup> <a name="PredictHttpUri" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.predictHttpUri"></a>

```go
func PredictHttpUri() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiEndpointDeployedModelsPrivateEndpoints
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointDeployedModelsPrivateEndpoints">VertexAiEndpointDeployedModelsPrivateEndpoints</a>

---


### VertexAiEndpointEncryptionSpecOutputReference <a name="VertexAiEndpointEncryptionSpecOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiEndpointEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiEndpointEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointEncryptionSpec">VertexAiEndpointEncryptionSpec</a>

---


### VertexAiEndpointTimeoutsOutputReference <a name="VertexAiEndpointTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaiendpoint"

vertexaiendpoint.NewVertexAiEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiEndpoint.VertexAiEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



