# `google_bigquery_datapolicy_data_policy_iam_member`

Refer to the Terraform Registory for docs: [`google_bigquery_datapolicy_data_policy_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member).

# `bigqueryDatapolicyDataPolicyIamMember` Submodule <a name="`bigqueryDatapolicyDataPolicyIamMember` Submodule" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyDataPolicyIamMember <a name="BigqueryDatapolicyDataPolicyIamMember" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member google_bigquery_datapolicy_data_policy_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/bigquerydatapolicydatapolicyiammember"

bigquerydatapolicydatapolicyiammember.NewBigqueryDatapolicyDataPolicyIamMember(scope Construct, id *string, config BigqueryDatapolicyDataPolicyIamMemberConfig) BigqueryDatapolicyDataPolicyIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig">BigqueryDatapolicyDataPolicyIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig">BigqueryDatapolicyDataPolicyIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.putCondition"></a>

```go
func PutCondition(value BigqueryDatapolicyDataPolicyIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition">BigqueryDatapolicyDataPolicyIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/bigquerydatapolicydatapolicyiammember"

bigquerydatapolicydatapolicyiammember.BigqueryDatapolicyDataPolicyIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/bigquerydatapolicydatapolicyiammember"

bigquerydatapolicydatapolicyiammember.BigqueryDatapolicyDataPolicyIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/bigquerydatapolicydatapolicyiammember"

bigquerydatapolicydatapolicyiammember.BigqueryDatapolicyDataPolicyIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference">BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition">BigqueryDatapolicyDataPolicyIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.dataPolicyIdInput">DataPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.condition"></a>

```go
func Condition() BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference">BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.conditionInput"></a>

```go
func ConditionInput() BigqueryDatapolicyDataPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition">BigqueryDatapolicyDataPolicyIamMemberCondition</a>

---

##### `DataPolicyIdInput`<sup>Optional</sup> <a name="DataPolicyIdInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.dataPolicyIdInput"></a>

```go
func DataPolicyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.dataPolicyId"></a>

```go
func DataPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyDataPolicyIamMemberCondition <a name="BigqueryDatapolicyDataPolicyIamMemberCondition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/bigquerydatapolicydatapolicyiammember"

&bigquerydatapolicydatapolicyiammember.BigqueryDatapolicyDataPolicyIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#expression BigqueryDatapolicyDataPolicyIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#title BigqueryDatapolicyDataPolicyIamMember#title}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#description BigqueryDatapolicyDataPolicyIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#expression BigqueryDatapolicyDataPolicyIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#title BigqueryDatapolicyDataPolicyIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#description BigqueryDatapolicyDataPolicyIamMember#description}.

---

### BigqueryDatapolicyDataPolicyIamMemberConfig <a name="BigqueryDatapolicyDataPolicyIamMemberConfig" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/bigquerydatapolicydatapolicyiammember"

&bigquerydatapolicydatapolicyiammember.BigqueryDatapolicyDataPolicyIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataPolicyId: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google/v7.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#data_policy_id BigqueryDatapolicyDataPolicyIamMember#data_policy_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#member BigqueryDatapolicyDataPolicyIamMember#member}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#role BigqueryDatapolicyDataPolicyIamMember#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition">BigqueryDatapolicyDataPolicyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#id BigqueryDatapolicyDataPolicyIamMember#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#location BigqueryDatapolicyDataPolicyIamMember#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#project BigqueryDatapolicyDataPolicyIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.dataPolicyId"></a>

```go
DataPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#data_policy_id BigqueryDatapolicyDataPolicyIamMember#data_policy_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#member BigqueryDatapolicyDataPolicyIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#role BigqueryDatapolicyDataPolicyIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.condition"></a>

```go
Condition BigqueryDatapolicyDataPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition">BigqueryDatapolicyDataPolicyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#condition BigqueryDatapolicyDataPolicyIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#id BigqueryDatapolicyDataPolicyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#location BigqueryDatapolicyDataPolicyIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/bigquery_datapolicy_data_policy_iam_member#project BigqueryDatapolicyDataPolicyIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference <a name="BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/bigquerydatapolicydatapolicyiammember"

bigquerydatapolicydatapolicyiammember.NewBigqueryDatapolicyDataPolicyIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition">BigqueryDatapolicyDataPolicyIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryDatapolicyDataPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamMember.BigqueryDatapolicyDataPolicyIamMemberCondition">BigqueryDatapolicyDataPolicyIamMemberCondition</a>

---



