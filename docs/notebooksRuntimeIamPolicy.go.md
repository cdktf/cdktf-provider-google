# `notebooksRuntimeIamPolicy` Submodule <a name="`notebooksRuntimeIamPolicy` Submodule" id="@cdktf/provider-google.notebooksRuntimeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksRuntimeIamPolicy <a name="NotebooksRuntimeIamPolicy" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy google_notebooks_runtime_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksruntimeiampolicy"

notebooksruntimeiampolicy.NewNotebooksRuntimeIamPolicy(scope Construct, id *string, config NotebooksRuntimeIamPolicyConfig) NotebooksRuntimeIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig">NotebooksRuntimeIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig">NotebooksRuntimeIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksruntimeiampolicy"

notebooksruntimeiampolicy.NotebooksRuntimeIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksruntimeiampolicy"

notebooksruntimeiampolicy.NotebooksRuntimeIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksruntimeiampolicy"

notebooksruntimeiampolicy.NotebooksRuntimeIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.runtimeNameInput">RuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.runtimeName">RuntimeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RuntimeNameInput`<sup>Optional</sup> <a name="RuntimeNameInput" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.runtimeNameInput"></a>

```go
func RuntimeNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.runtimeName"></a>

```go
func RuntimeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksRuntimeIamPolicyConfig <a name="NotebooksRuntimeIamPolicyConfig" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksruntimeiampolicy"

&notebooksruntimeiampolicy.NotebooksRuntimeIamPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyData: *string,
	RuntimeName: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy#policy_data NotebooksRuntimeIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.runtimeName">RuntimeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy#runtime_name NotebooksRuntimeIamPolicy#runtime_name}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy#id NotebooksRuntimeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy#location NotebooksRuntimeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy#project NotebooksRuntimeIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy#policy_data NotebooksRuntimeIamPolicy#policy_data}.

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.runtimeName"></a>

```go
RuntimeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy#runtime_name NotebooksRuntimeIamPolicy#runtime_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy#id NotebooksRuntimeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy#location NotebooksRuntimeIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime_iam_policy#project NotebooksRuntimeIamPolicy#project}.

---



