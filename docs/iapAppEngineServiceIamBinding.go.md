# `iapAppEngineServiceIamBinding` Submodule <a name="`iapAppEngineServiceIamBinding` Submodule" id="@cdktf/provider-google.iapAppEngineServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAppEngineServiceIamBinding <a name="IapAppEngineServiceIamBinding" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding google_iap_app_engine_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiambinding"

iapappengineserviceiambinding.NewIapAppEngineServiceIamBinding(scope Construct, id *string, config IapAppEngineServiceIamBindingConfig) IapAppEngineServiceIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig">IapAppEngineServiceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig">IapAppEngineServiceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.putCondition"></a>

```go
func PutCondition(value IapAppEngineServiceIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition">IapAppEngineServiceIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiambinding"

iapappengineserviceiambinding.IapAppEngineServiceIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiambinding"

iapappengineserviceiambinding.IapAppEngineServiceIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiambinding"

iapappengineserviceiambinding.IapAppEngineServiceIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference">IapAppEngineServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition">IapAppEngineServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.condition"></a>

```go
func Condition() IapAppEngineServiceIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference">IapAppEngineServiceIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.conditionInput"></a>

```go
func ConditionInput() IapAppEngineServiceIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition">IapAppEngineServiceIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IapAppEngineServiceIamBindingCondition <a name="IapAppEngineServiceIamBindingCondition" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiambinding"

&iapappengineserviceiambinding.IapAppEngineServiceIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#expression IapAppEngineServiceIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#title IapAppEngineServiceIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#description IapAppEngineServiceIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#expression IapAppEngineServiceIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#title IapAppEngineServiceIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#description IapAppEngineServiceIamBinding#description}.

---

### IapAppEngineServiceIamBindingConfig <a name="IapAppEngineServiceIamBindingConfig" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiambinding"

&iapappengineserviceiambinding.IapAppEngineServiceIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Members: *[]*string,
	Role: *string,
	Service: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#app_id IapAppEngineServiceIamBinding#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#members IapAppEngineServiceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#role IapAppEngineServiceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#service IapAppEngineServiceIamBinding#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition">IapAppEngineServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#id IapAppEngineServiceIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#project IapAppEngineServiceIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#app_id IapAppEngineServiceIamBinding#app_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#members IapAppEngineServiceIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#role IapAppEngineServiceIamBinding#role}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#service IapAppEngineServiceIamBinding#service}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.condition"></a>

```go
Condition IapAppEngineServiceIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition">IapAppEngineServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#condition IapAppEngineServiceIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#id IapAppEngineServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_binding#project IapAppEngineServiceIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAppEngineServiceIamBindingConditionOutputReference <a name="IapAppEngineServiceIamBindingConditionOutputReference" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiambinding"

iapappengineserviceiambinding.NewIapAppEngineServiceIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IapAppEngineServiceIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition">IapAppEngineServiceIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() IapAppEngineServiceIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamBinding.IapAppEngineServiceIamBindingCondition">IapAppEngineServiceIamBindingCondition</a>

---



