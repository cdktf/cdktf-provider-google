# `iapAppEngineVersionIamPolicy` Submodule <a name="`iapAppEngineVersionIamPolicy` Submodule" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAppEngineVersionIamPolicy <a name="IapAppEngineVersionIamPolicy" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy google_iap_app_engine_version_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineversioniampolicy"

iapappengineversioniampolicy.NewIapAppEngineVersionIamPolicy(scope Construct, id *string, config IapAppEngineVersionIamPolicyConfig) IapAppEngineVersionIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig">IapAppEngineVersionIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig">IapAppEngineVersionIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineversioniampolicy"

iapappengineversioniampolicy.IapAppEngineVersionIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineversioniampolicy"

iapappengineversioniampolicy.IapAppEngineVersionIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineversioniampolicy"

iapappengineversioniampolicy.IapAppEngineVersionIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IapAppEngineVersionIamPolicyConfig <a name="IapAppEngineVersionIamPolicyConfig" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineversioniampolicy"

&iapappengineversioniampolicy.IapAppEngineVersionIamPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	PolicyData: *string,
	Service: *string,
	VersionId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#app_id IapAppEngineVersionIamPolicy#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#policy_data IapAppEngineVersionIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#service IapAppEngineVersionIamPolicy#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.versionId">VersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#version_id IapAppEngineVersionIamPolicy#version_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#id IapAppEngineVersionIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#project IapAppEngineVersionIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#app_id IapAppEngineVersionIamPolicy#app_id}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#policy_data IapAppEngineVersionIamPolicy#policy_data}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#service IapAppEngineVersionIamPolicy#service}.

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#version_id IapAppEngineVersionIamPolicy#version_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#id IapAppEngineVersionIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.iapAppEngineVersionIamPolicy.IapAppEngineVersionIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_version_iam_policy#project IapAppEngineVersionIamPolicy#project}.

---



