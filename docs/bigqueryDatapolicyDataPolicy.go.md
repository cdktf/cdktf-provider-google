# `bigqueryDatapolicyDataPolicy` Submodule <a name="`bigqueryDatapolicyDataPolicy` Submodule" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyDataPolicy <a name="BigqueryDatapolicyDataPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.NewBigqueryDatapolicyDataPolicy(scope Construct, id *string, config BigqueryDatapolicyDataPolicyConfig) BigqueryDatapolicyDataPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig">BigqueryDatapolicyDataPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig">BigqueryDatapolicyDataPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putDataMaskingPolicy">PutDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetDataMaskingPolicy">ResetDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDataMaskingPolicy` <a name="PutDataMaskingPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putDataMaskingPolicy"></a>

```go
func PutDataMaskingPolicy(value BigqueryDatapolicyDataPolicyDataMaskingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putDataMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryDatapolicyDataPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a>

---

##### `ResetDataMaskingPolicy` <a name="ResetDataMaskingPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetDataMaskingPolicy"></a>

```go
func ResetDataMaskingPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicy">DataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference">BigqueryDatapolicyDataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput">DataMaskingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyIdInput">DataPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput">DataPolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTagInput">PolicyTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyType">DataPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTag">PolicyTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataMaskingPolicy`<sup>Required</sup> <a name="DataMaskingPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicy"></a>

```go
func DataMaskingPolicy() BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeouts"></a>

```go
func Timeouts() BigqueryDatapolicyDataPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference">BigqueryDatapolicyDataPolicyTimeoutsOutputReference</a>

---

##### `DataMaskingPolicyInput`<sup>Optional</sup> <a name="DataMaskingPolicyInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput"></a>

```go
func DataMaskingPolicyInput() BigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `DataPolicyIdInput`<sup>Optional</sup> <a name="DataPolicyIdInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyIdInput"></a>

```go
func DataPolicyIdInput() *string
```

- *Type:* *string

---

##### `DataPolicyTypeInput`<sup>Optional</sup> <a name="DataPolicyTypeInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput"></a>

```go
func DataPolicyTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyTagInput`<sup>Optional</sup> <a name="PolicyTagInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTagInput"></a>

```go
func PolicyTagInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyId"></a>

```go
func DataPolicyId() *string
```

- *Type:* *string

---

##### `DataPolicyType`<sup>Required</sup> <a name="DataPolicyType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyType"></a>

```go
func DataPolicyType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTag"></a>

```go
func PolicyTag() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyDataPolicyConfig <a name="BigqueryDatapolicyDataPolicyConfig" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerydatapolicydatapolicy"

&bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataPolicyId: *string,
	DataPolicyType: *string,
	Location: *string,
	PolicyTag: *string,
	DataMaskingPolicy: github.com/cdktf/cdktf-provider-google-go/google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyId">DataPolicyId</a></code> | <code>*string</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyType">DataPolicyType</a></code> | <code>*string</code> | The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location of the data policy. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.policyTag">PolicyTag</a></code> | <code>*string</code> | Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy">DataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#id BigqueryDatapolicyDataPolicy#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#project BigqueryDatapolicyDataPolicy#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyId"></a>

```go
DataPolicyId *string
```

- *Type:* *string

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {dataPolicyId} in part of the resource name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#data_policy_id BigqueryDatapolicyDataPolicy#data_policy_id}

---

##### `DataPolicyType`<sup>Required</sup> <a name="DataPolicyType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyType"></a>

```go
DataPolicyType *string
```

- *Type:* *string

The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#data_policy_type BigqueryDatapolicyDataPolicy#data_policy_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location of the data policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#location BigqueryDatapolicyDataPolicy#location}

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.policyTag"></a>

```go
PolicyTag *string
```

- *Type:* *string

Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#policy_tag BigqueryDatapolicyDataPolicy#policy_tag}

---

##### `DataMaskingPolicy`<sup>Optional</sup> <a name="DataMaskingPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy"></a>

```go
DataMaskingPolicy BigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#data_masking_policy BigqueryDatapolicyDataPolicy#data_masking_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#id BigqueryDatapolicyDataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#project BigqueryDatapolicyDataPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.timeouts"></a>

```go
Timeouts BigqueryDatapolicyDataPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#timeouts BigqueryDatapolicyDataPolicy#timeouts}

---

### BigqueryDatapolicyDataPolicyDataMaskingPolicy <a name="BigqueryDatapolicyDataPolicyDataMaskingPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerydatapolicydatapolicy"

&bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy {
	PredefinedExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression">PredefinedExpression</a></code> | <code>*string</code> | The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"]. |

---

##### `PredefinedExpression`<sup>Required</sup> <a name="PredefinedExpression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```go
PredefinedExpression *string
```

- *Type:* *string

The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#predefined_expression BigqueryDatapolicyDataPolicy#predefined_expression}

---

### BigqueryDatapolicyDataPolicyTimeouts <a name="BigqueryDatapolicyDataPolicyTimeouts" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerydatapolicydatapolicy"

&bigquerydatapolicydatapolicy.BigqueryDatapolicyDataPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#create BigqueryDatapolicyDataPolicy#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#delete BigqueryDatapolicyDataPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#update BigqueryDatapolicyDataPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#create BigqueryDatapolicyDataPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#delete BigqueryDatapolicyDataPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy#update BigqueryDatapolicyDataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference <a name="BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.NewBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">PredefinedExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">PredefinedExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedExpressionInput`<sup>Optional</sup> <a name="PredefinedExpressionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```go
func PredefinedExpressionInput() *string
```

- *Type:* *string

---

##### `PredefinedExpression`<sup>Required</sup> <a name="PredefinedExpression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```go
func PredefinedExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryDatapolicyDataPolicyDataMaskingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---


### BigqueryDatapolicyDataPolicyTimeoutsOutputReference <a name="BigqueryDatapolicyDataPolicyTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerydatapolicydatapolicy"

bigquerydatapolicydatapolicy.NewBigqueryDatapolicyDataPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryDatapolicyDataPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



