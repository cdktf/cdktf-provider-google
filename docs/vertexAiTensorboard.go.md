# `vertexAiTensorboard` Submodule <a name="`vertexAiTensorboard` Submodule" id="@cdktf/provider-google.vertexAiTensorboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiTensorboard <a name="VertexAiTensorboard" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard google_vertex_ai_tensorboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaitensorboard"

vertexaitensorboard.NewVertexAiTensorboard(scope Construct, id *string, config VertexAiTensorboardConfig) VertexAiTensorboard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig">VertexAiTensorboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig">VertexAiTensorboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value VertexAiTensorboardEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec">VertexAiTensorboardEncryptionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiTensorboardTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts">VertexAiTensorboardTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaitensorboard"

vertexaitensorboard.VertexAiTensorboard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaitensorboard"

vertexaitensorboard.VertexAiTensorboard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaitensorboard"

vertexaitensorboard.VertexAiTensorboard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.blobStoragePathPrefix">BlobStoragePathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference">VertexAiTensorboardEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.runCount">RunCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference">VertexAiTensorboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec">VertexAiTensorboardEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlobStoragePathPrefix`<sup>Required</sup> <a name="BlobStoragePathPrefix" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.blobStoragePathPrefix"></a>

```go
func BlobStoragePathPrefix() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.encryptionSpec"></a>

```go
func EncryptionSpec() VertexAiTensorboardEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference">VertexAiTensorboardEncryptionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RunCount`<sup>Required</sup> <a name="RunCount" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.runCount"></a>

```go
func RunCount() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.timeouts"></a>

```go
func Timeouts() VertexAiTensorboardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference">VertexAiTensorboardTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() VertexAiTensorboardEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec">VertexAiTensorboardEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiTensorboardConfig <a name="VertexAiTensorboardConfig" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaitensorboard"

&vertexaitensorboard.VertexAiTensorboardConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Description: *string,
	EncryptionSpec: github.com/cdktf/cdktf-provider-google-go/google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.vertexAiTensorboard.VertexAiTensorboardTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User provided name of this Tensorboard. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.description">Description</a></code> | <code>*string</code> | Description of this Tensorboard. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec">VertexAiTensorboardEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#id VertexAiTensorboard#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize your Tensorboards. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#project VertexAiTensorboard#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.region">Region</a></code> | <code>*string</code> | The region of the tensorboard. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts">VertexAiTensorboardTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User provided name of this Tensorboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#display_name VertexAiTensorboard#display_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of this Tensorboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#description VertexAiTensorboard#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.encryptionSpec"></a>

```go
EncryptionSpec VertexAiTensorboardEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec">VertexAiTensorboardEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#encryption_spec VertexAiTensorboard#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#id VertexAiTensorboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize your Tensorboards.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#labels VertexAiTensorboard#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#project VertexAiTensorboard#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the tensorboard. eg us-central1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#region VertexAiTensorboard#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardConfig.property.timeouts"></a>

```go
Timeouts VertexAiTensorboardTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts">VertexAiTensorboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#timeouts VertexAiTensorboard#timeouts}

---

### VertexAiTensorboardEncryptionSpec <a name="VertexAiTensorboardEncryptionSpec" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaitensorboard"

&vertexaitensorboard.VertexAiTensorboardEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#kms_key_name VertexAiTensorboard#kms_key_name}

---

### VertexAiTensorboardTimeouts <a name="VertexAiTensorboardTimeouts" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaitensorboard"

&vertexaitensorboard.VertexAiTensorboardTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#create VertexAiTensorboard#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#delete VertexAiTensorboard#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#update VertexAiTensorboard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#create VertexAiTensorboard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#delete VertexAiTensorboard#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_tensorboard#update VertexAiTensorboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiTensorboardEncryptionSpecOutputReference <a name="VertexAiTensorboardEncryptionSpecOutputReference" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaitensorboard"

vertexaitensorboard.NewVertexAiTensorboardEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiTensorboardEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec">VertexAiTensorboardEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiTensorboardEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardEncryptionSpec">VertexAiTensorboardEncryptionSpec</a>

---


### VertexAiTensorboardTimeoutsOutputReference <a name="VertexAiTensorboardTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vertexaitensorboard"

vertexaitensorboard.NewVertexAiTensorboardTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiTensorboardTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiTensorboard.VertexAiTensorboardTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



