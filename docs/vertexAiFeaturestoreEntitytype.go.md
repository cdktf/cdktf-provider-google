# `vertexAiFeaturestoreEntitytype` Submodule <a name="`vertexAiFeaturestoreEntitytype` Submodule" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeaturestoreEntitytype <a name="VertexAiFeaturestoreEntitytype" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype google_vertex_ai_featurestore_entitytype}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

vertexaifeaturestoreentitytype.NewVertexAiFeaturestoreEntitytype(scope Construct, id *string, config VertexAiFeaturestoreEntitytypeConfig) VertexAiFeaturestoreEntitytype
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig">VertexAiFeaturestoreEntitytypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig">VertexAiFeaturestoreEntitytypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putMonitoringConfig">PutMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetMonitoringConfig">ResetMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMonitoringConfig` <a name="PutMonitoringConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putMonitoringConfig"></a>

```go
func PutMonitoringConfig(value VertexAiFeaturestoreEntitytypeMonitoringConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putMonitoringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiFeaturestoreEntitytypeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMonitoringConfig` <a name="ResetMonitoringConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetMonitoringConfig"></a>

```go
func ResetMonitoringConfig()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

vertexaifeaturestoreentitytype.VertexAiFeaturestoreEntitytype_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

vertexaifeaturestoreentitytype.VertexAiFeaturestoreEntitytype_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

vertexaifeaturestoreentitytype.VertexAiFeaturestoreEntitytype_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.monitoringConfig">MonitoringConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference">VertexAiFeaturestoreEntitytypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.featurestoreInput">FeaturestoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.monitoringConfigInput">MonitoringConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.featurestore">Featurestore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `MonitoringConfig`<sup>Required</sup> <a name="MonitoringConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.monitoringConfig"></a>

```go
func MonitoringConfig() VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.timeouts"></a>

```go
func Timeouts() VertexAiFeaturestoreEntitytypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference">VertexAiFeaturestoreEntitytypeTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FeaturestoreInput`<sup>Optional</sup> <a name="FeaturestoreInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.featurestoreInput"></a>

```go
func FeaturestoreInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MonitoringConfigInput`<sup>Optional</sup> <a name="MonitoringConfigInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.monitoringConfigInput"></a>

```go
func MonitoringConfigInput() VertexAiFeaturestoreEntitytypeMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Featurestore`<sup>Required</sup> <a name="Featurestore" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.featurestore"></a>

```go
func Featurestore() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeaturestoreEntitytypeConfig <a name="VertexAiFeaturestoreEntitytypeConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

&vertexaifeaturestoreentitytype.VertexAiFeaturestoreEntitytypeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Featurestore: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	MonitoringConfig: github.com/cdktf/cdktf-provider-google-go/google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig,
	Name: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.featurestore">Featurestore</a></code> | <code>*string</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Description of the EntityType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#id VertexAiFeaturestoreEntitytype#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to this EntityType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.monitoringConfig">MonitoringConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.name">Name</a></code> | <code>*string</code> | The name of the EntityType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Featurestore`<sup>Required</sup> <a name="Featurestore" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.featurestore"></a>

```go
Featurestore *string
```

- *Type:* *string

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#featurestore VertexAiFeaturestoreEntitytype#featurestore}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of the EntityType.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#description VertexAiFeaturestoreEntitytype#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#id VertexAiFeaturestoreEntitytype#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to this EntityType.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#labels VertexAiFeaturestoreEntitytype#labels}

---

##### `MonitoringConfig`<sup>Optional</sup> <a name="MonitoringConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.monitoringConfig"></a>

```go
MonitoringConfig VertexAiFeaturestoreEntitytypeMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#monitoring_config VertexAiFeaturestoreEntitytype#monitoring_config}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the EntityType.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#name VertexAiFeaturestoreEntitytype#name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.timeouts"></a>

```go
Timeouts VertexAiFeaturestoreEntitytypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#timeouts VertexAiFeaturestoreEntitytype#timeouts}

---

### VertexAiFeaturestoreEntitytypeMonitoringConfig <a name="VertexAiFeaturestoreEntitytypeMonitoringConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

&vertexaifeaturestoreentitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig {
	CategoricalThresholdConfig: github.com/cdktf/cdktf-provider-google-go/google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig,
	ImportFeaturesAnalysis: github.com/cdktf/cdktf-provider-google-go/google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis,
	NumericalThresholdConfig: github.com/cdktf/cdktf-provider-google-go/google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig,
	SnapshotAnalysis: github.com/cdktf/cdktf-provider-google-go/google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.categoricalThresholdConfig">CategoricalThresholdConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a></code> | categorical_threshold_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.importFeaturesAnalysis">ImportFeaturesAnalysis</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a></code> | import_features_analysis block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.numericalThresholdConfig">NumericalThresholdConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a></code> | numerical_threshold_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.snapshotAnalysis">SnapshotAnalysis</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a></code> | snapshot_analysis block. |

---

##### `CategoricalThresholdConfig`<sup>Optional</sup> <a name="CategoricalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.categoricalThresholdConfig"></a>

```go
CategoricalThresholdConfig VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

categorical_threshold_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#categorical_threshold_config VertexAiFeaturestoreEntitytype#categorical_threshold_config}

---

##### `ImportFeaturesAnalysis`<sup>Optional</sup> <a name="ImportFeaturesAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.importFeaturesAnalysis"></a>

```go
ImportFeaturesAnalysis VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

import_features_analysis block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#import_features_analysis VertexAiFeaturestoreEntitytype#import_features_analysis}

---

##### `NumericalThresholdConfig`<sup>Optional</sup> <a name="NumericalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.numericalThresholdConfig"></a>

```go
NumericalThresholdConfig VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

numerical_threshold_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#numerical_threshold_config VertexAiFeaturestoreEntitytype#numerical_threshold_config}

---

##### `SnapshotAnalysis`<sup>Optional</sup> <a name="SnapshotAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.snapshotAnalysis"></a>

```go
SnapshotAnalysis VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

snapshot_analysis block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#snapshot_analysis VertexAiFeaturestoreEntitytype#snapshot_analysis}

---

### VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

&vertexaifeaturestoreentitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig {
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig.property.value">Value</a></code> | <code>*f64</code> | Specify a threshold value that can trigger the alert. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Specify a threshold value that can trigger the alert.

For categorical feature, the distribution distance is calculated by L-inifinity norm. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#value VertexAiFeaturestoreEntitytype#value}

---

### VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

&vertexaifeaturestoreentitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis {
	AnomalyDetectionBaseline: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.anomalyDetectionBaseline">AnomalyDetectionBaseline</a></code> | <code>*string</code> | Defines the baseline to do anomaly detection for feature values imported by each [entityTypes.importFeatureValues][] operation. The value must be one of the values below: LATEST_STATS: Choose the later one statistics generated by either most recent snapshot analysis or previous import features analysis. If non of them exists, skip anomaly detection and only generate a statistics. MOST_RECENT_SNAPSHOT_STATS: Use the statistics generated by the most recent snapshot analysis if exists. PREVIOUS_IMPORT_FEATURES_STATS: Use the statistics generated by the previous import features analysis if exists. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.state">State</a></code> | <code>*string</code> | Whether to enable / disable / inherite default hebavior for import features analysis. |

---

##### `AnomalyDetectionBaseline`<sup>Optional</sup> <a name="AnomalyDetectionBaseline" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.anomalyDetectionBaseline"></a>

```go
AnomalyDetectionBaseline *string
```

- *Type:* *string

Defines the baseline to do anomaly detection for feature values imported by each [entityTypes.importFeatureValues][] operation. The value must be one of the values below: LATEST_STATS: Choose the later one statistics generated by either most recent snapshot analysis or previous import features analysis. If non of them exists, skip anomaly detection and only generate a statistics. MOST_RECENT_SNAPSHOT_STATS: Use the statistics generated by the most recent snapshot analysis if exists. PREVIOUS_IMPORT_FEATURES_STATS: Use the statistics generated by the previous import features analysis if exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#anomaly_detection_baseline VertexAiFeaturestoreEntitytype#anomaly_detection_baseline}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.state"></a>

```go
State *string
```

- *Type:* *string

Whether to enable / disable / inherite default hebavior for import features analysis.

The value must be one of the values below:
DEFAULT: The default behavior of whether to enable the monitoring. EntityType-level config: disabled.
ENABLED: Explicitly enables import features analysis. EntityType-level config: by default enables import features analysis for all Features under it.
DISABLED: Explicitly disables import features analysis. EntityType-level config: by default disables import features analysis for all Features under it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#state VertexAiFeaturestoreEntitytype#state}

---

### VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

&vertexaifeaturestoreentitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig {
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig.property.value">Value</a></code> | <code>*f64</code> | Specify a threshold value that can trigger the alert. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Specify a threshold value that can trigger the alert.

For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#value VertexAiFeaturestoreEntitytype#value}

---

### VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

&vertexaifeaturestoreentitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis {
	Disabled: interface{},
	MonitoringIntervalDays: *f64,
	StalenessDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.disabled">Disabled</a></code> | <code>interface{}</code> | The monitoring schedule for snapshot analysis. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.monitoringIntervalDays">MonitoringIntervalDays</a></code> | <code>*f64</code> | Configuration of the snapshot analysis based monitoring pipeline running interval. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.stalenessDays">StalenessDays</a></code> | <code>*f64</code> | Customized export features time window for snapshot analysis. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

The monitoring schedule for snapshot analysis.

For EntityType-level config: unset / disabled = true indicates disabled by default for Features under it; otherwise by default enable snapshot analysis monitoring with monitoringInterval for Features under it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#disabled VertexAiFeaturestoreEntitytype#disabled}

---

##### `MonitoringIntervalDays`<sup>Optional</sup> <a name="MonitoringIntervalDays" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.monitoringIntervalDays"></a>

```go
MonitoringIntervalDays *f64
```

- *Type:* *f64

Configuration of the snapshot analysis based monitoring pipeline running interval.

The value indicates number of days. The default value is 1.
If both FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days and [FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval][] are set when creating/updating EntityTypes/Features, FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#monitoring_interval_days VertexAiFeaturestoreEntitytype#monitoring_interval_days}

---

##### `StalenessDays`<sup>Optional</sup> <a name="StalenessDays" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.stalenessDays"></a>

```go
StalenessDays *f64
```

- *Type:* *f64

Customized export features time window for snapshot analysis.

Unit is one day. The default value is 21 days. Minimum value is 1 day. Maximum value is 4000 days.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#staleness_days VertexAiFeaturestoreEntitytype#staleness_days}

---

### VertexAiFeaturestoreEntitytypeTimeouts <a name="VertexAiFeaturestoreEntitytypeTimeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

&vertexaifeaturestoreentitytype.VertexAiFeaturestoreEntitytypeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#create VertexAiFeaturestoreEntitytype#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#delete VertexAiFeaturestoreEntitytype#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#update VertexAiFeaturestoreEntitytype#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#create VertexAiFeaturestoreEntitytype#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#delete VertexAiFeaturestoreEntitytype#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype#update VertexAiFeaturestoreEntitytype#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

vertexaifeaturestoreentitytype.NewVertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

---


### VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

vertexaifeaturestoreentitytype.NewVertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetAnomalyDetectionBaseline">ResetAnomalyDetectionBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnomalyDetectionBaseline` <a name="ResetAnomalyDetectionBaseline" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetAnomalyDetectionBaseline"></a>

```go
func ResetAnomalyDetectionBaseline()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaselineInput">AnomalyDetectionBaselineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaseline">AnomalyDetectionBaseline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnomalyDetectionBaselineInput`<sup>Optional</sup> <a name="AnomalyDetectionBaselineInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaselineInput"></a>

```go
func AnomalyDetectionBaselineInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AnomalyDetectionBaseline`<sup>Required</sup> <a name="AnomalyDetectionBaseline" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaseline"></a>

```go
func AnomalyDetectionBaseline() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

---


### VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

vertexaifeaturestoreentitytype.NewVertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

---


### VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

vertexaifeaturestoreentitytype.NewVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putCategoricalThresholdConfig">PutCategoricalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putImportFeaturesAnalysis">PutImportFeaturesAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putNumericalThresholdConfig">PutNumericalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis">PutSnapshotAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetCategoricalThresholdConfig">ResetCategoricalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetImportFeaturesAnalysis">ResetImportFeaturesAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetNumericalThresholdConfig">ResetNumericalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetSnapshotAnalysis">ResetSnapshotAnalysis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCategoricalThresholdConfig` <a name="PutCategoricalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putCategoricalThresholdConfig"></a>

```go
func PutCategoricalThresholdConfig(value VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putCategoricalThresholdConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

---

##### `PutImportFeaturesAnalysis` <a name="PutImportFeaturesAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putImportFeaturesAnalysis"></a>

```go
func PutImportFeaturesAnalysis(value VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putImportFeaturesAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

---

##### `PutNumericalThresholdConfig` <a name="PutNumericalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putNumericalThresholdConfig"></a>

```go
func PutNumericalThresholdConfig(value VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putNumericalThresholdConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

---

##### `PutSnapshotAnalysis` <a name="PutSnapshotAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis"></a>

```go
func PutSnapshotAnalysis(value VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

---

##### `ResetCategoricalThresholdConfig` <a name="ResetCategoricalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetCategoricalThresholdConfig"></a>

```go
func ResetCategoricalThresholdConfig()
```

##### `ResetImportFeaturesAnalysis` <a name="ResetImportFeaturesAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetImportFeaturesAnalysis"></a>

```go
func ResetImportFeaturesAnalysis()
```

##### `ResetNumericalThresholdConfig` <a name="ResetNumericalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetNumericalThresholdConfig"></a>

```go
func ResetNumericalThresholdConfig()
```

##### `ResetSnapshotAnalysis` <a name="ResetSnapshotAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetSnapshotAnalysis"></a>

```go
func ResetSnapshotAnalysis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfig">CategoricalThresholdConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysis">ImportFeaturesAnalysis</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfig">NumericalThresholdConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysis">SnapshotAnalysis</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfigInput">CategoricalThresholdConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysisInput">ImportFeaturesAnalysisInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfigInput">NumericalThresholdConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysisInput">SnapshotAnalysisInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoricalThresholdConfig`<sup>Required</sup> <a name="CategoricalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfig"></a>

```go
func CategoricalThresholdConfig() VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference</a>

---

##### `ImportFeaturesAnalysis`<sup>Required</sup> <a name="ImportFeaturesAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysis"></a>

```go
func ImportFeaturesAnalysis() VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference</a>

---

##### `NumericalThresholdConfig`<sup>Required</sup> <a name="NumericalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfig"></a>

```go
func NumericalThresholdConfig() VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference</a>

---

##### `SnapshotAnalysis`<sup>Required</sup> <a name="SnapshotAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysis"></a>

```go
func SnapshotAnalysis() VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference</a>

---

##### `CategoricalThresholdConfigInput`<sup>Optional</sup> <a name="CategoricalThresholdConfigInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfigInput"></a>

```go
func CategoricalThresholdConfigInput() VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

---

##### `ImportFeaturesAnalysisInput`<sup>Optional</sup> <a name="ImportFeaturesAnalysisInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysisInput"></a>

```go
func ImportFeaturesAnalysisInput() VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

---

##### `NumericalThresholdConfigInput`<sup>Optional</sup> <a name="NumericalThresholdConfigInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfigInput"></a>

```go
func NumericalThresholdConfigInput() VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

---

##### `SnapshotAnalysisInput`<sup>Optional</sup> <a name="SnapshotAnalysisInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysisInput"></a>

```go
func SnapshotAnalysisInput() VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiFeaturestoreEntitytypeMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a>

---


### VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

vertexaifeaturestoreentitytype.NewVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetMonitoringIntervalDays">ResetMonitoringIntervalDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetStalenessDays">ResetStalenessDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetMonitoringIntervalDays` <a name="ResetMonitoringIntervalDays" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetMonitoringIntervalDays"></a>

```go
func ResetMonitoringIntervalDays()
```

##### `ResetStalenessDays` <a name="ResetStalenessDays" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetStalenessDays"></a>

```go
func ResetStalenessDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDaysInput">MonitoringIntervalDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDaysInput">StalenessDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDays">MonitoringIntervalDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDays">StalenessDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringIntervalDaysInput`<sup>Optional</sup> <a name="MonitoringIntervalDaysInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDaysInput"></a>

```go
func MonitoringIntervalDaysInput() *f64
```

- *Type:* *f64

---

##### `StalenessDaysInput`<sup>Optional</sup> <a name="StalenessDaysInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDaysInput"></a>

```go
func StalenessDaysInput() *f64
```

- *Type:* *f64

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `MonitoringIntervalDays`<sup>Required</sup> <a name="MonitoringIntervalDays" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDays"></a>

```go
func MonitoringIntervalDays() *f64
```

- *Type:* *f64

---

##### `StalenessDays`<sup>Required</sup> <a name="StalenessDays" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDays"></a>

```go
func StalenessDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

---


### VertexAiFeaturestoreEntitytypeTimeoutsOutputReference <a name="VertexAiFeaturestoreEntitytypeTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytype"

vertexaifeaturestoreentitytype.NewVertexAiFeaturestoreEntitytypeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeaturestoreEntitytypeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



