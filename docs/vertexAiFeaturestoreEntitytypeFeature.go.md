# `vertexAiFeaturestoreEntitytypeFeature` Submodule <a name="`vertexAiFeaturestoreEntitytypeFeature` Submodule" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeaturestoreEntitytypeFeature <a name="VertexAiFeaturestoreEntitytypeFeature" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature google_vertex_ai_featurestore_entitytype_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytypefeature"

vertexaifeaturestoreentitytypefeature.NewVertexAiFeaturestoreEntitytypeFeature(scope Construct, id *string, config VertexAiFeaturestoreEntitytypeFeatureConfig) VertexAiFeaturestoreEntitytypeFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig">VertexAiFeaturestoreEntitytypeFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig">VertexAiFeaturestoreEntitytypeFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiFeaturestoreEntitytypeFeatureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytypefeature"

vertexaifeaturestoreentitytypefeature.VertexAiFeaturestoreEntitytypeFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytypefeature"

vertexaifeaturestoreentitytypefeature.VertexAiFeaturestoreEntitytypeFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytypefeature"

vertexaifeaturestoreentitytypefeature.VertexAiFeaturestoreEntitytypeFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference">VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.entitytypeInput">EntitytypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.entitytype">Entitytype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.timeouts"></a>

```go
func Timeouts() VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference">VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntitytypeInput`<sup>Optional</sup> <a name="EntitytypeInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.entitytypeInput"></a>

```go
func EntitytypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Entitytype`<sup>Required</sup> <a name="Entitytype" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.entitytype"></a>

```go
func Entitytype() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeaturestoreEntitytypeFeatureConfig <a name="VertexAiFeaturestoreEntitytypeFeatureConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytypefeature"

&vertexaifeaturestoreentitytypefeature.VertexAiFeaturestoreEntitytypeFeatureConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Entitytype: *string,
	ValueType: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Name: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.entitytype">Entitytype</a></code> | <code>*string</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.valueType">ValueType</a></code> | <code>*string</code> | Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.description">Description</a></code> | <code>*string</code> | Description of the feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#id VertexAiFeaturestoreEntitytypeFeature#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to the feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.name">Name</a></code> | <code>*string</code> | The name of the feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Entitytype`<sup>Required</sup> <a name="Entitytype" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.entitytype"></a>

```go
Entitytype *string
```

- *Type:* *string

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#entitytype VertexAiFeaturestoreEntitytypeFeature#entitytype}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#value_type VertexAiFeaturestoreEntitytypeFeature#value_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#description VertexAiFeaturestoreEntitytypeFeature#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#id VertexAiFeaturestoreEntitytypeFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to the feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#labels VertexAiFeaturestoreEntitytypeFeature#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the feature.

The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#name VertexAiFeaturestoreEntitytypeFeature#name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureConfig.property.timeouts"></a>

```go
Timeouts VertexAiFeaturestoreEntitytypeFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts">VertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#timeouts VertexAiFeaturestoreEntitytypeFeature#timeouts}

---

### VertexAiFeaturestoreEntitytypeFeatureTimeouts <a name="VertexAiFeaturestoreEntitytypeFeatureTimeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytypefeature"

&vertexaifeaturestoreentitytypefeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#create VertexAiFeaturestoreEntitytypeFeature#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#delete VertexAiFeaturestoreEntitytypeFeature#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#update VertexAiFeaturestoreEntitytypeFeature#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#create VertexAiFeaturestoreEntitytypeFeature#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#delete VertexAiFeaturestoreEntitytypeFeature#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_featurestore_entitytype_feature#update VertexAiFeaturestoreEntitytypeFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference <a name="VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaifeaturestoreentitytypefeature"

vertexaifeaturestoreentitytypefeature.NewVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytypeFeature.VertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



