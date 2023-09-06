# `data_google_bigquery_analytics_hub_listing_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_bigquery_analytics_hub_listing_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy).

# `dataGoogleBigqueryAnalyticsHubListingIamPolicy` Submodule <a name="`dataGoogleBigqueryAnalyticsHubListingIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBigqueryAnalyticsHubListingIamPolicy <a name="DataGoogleBigqueryAnalyticsHubListingIamPolicy" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy google_bigquery_analytics_hub_listing_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebigqueryanalyticshublistingiampolicy"

datagooglebigqueryanalyticshublistingiampolicy.NewDataGoogleBigqueryAnalyticsHubListingIamPolicy(scope Construct, id *string, config DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig) DataGoogleBigqueryAnalyticsHubListingIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig">DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig">DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebigqueryanalyticshublistingiampolicy"

datagooglebigqueryanalyticshublistingiampolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebigqueryanalyticshublistingiampolicy"

datagooglebigqueryanalyticshublistingiampolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebigqueryanalyticshublistingiampolicy"

datagooglebigqueryanalyticshublistingiampolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dataExchangeIdInput"></a>

```go
func DataExchangeIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dataExchangeId"></a>

```go
func DataExchangeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig <a name="DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebigqueryanalyticshublistingiampolicy"

&datagooglebigqueryanalyticshublistingiampolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataExchangeId: *string,
	ListingId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#data_exchange_id DataGoogleBigqueryAnalyticsHubListingIamPolicy#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.listingId">ListingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#listing_id DataGoogleBigqueryAnalyticsHubListingIamPolicy#listing_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#id DataGoogleBigqueryAnalyticsHubListingIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#location DataGoogleBigqueryAnalyticsHubListingIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#project DataGoogleBigqueryAnalyticsHubListingIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.dataExchangeId"></a>

```go
DataExchangeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#data_exchange_id DataGoogleBigqueryAnalyticsHubListingIamPolicy#data_exchange_id}.

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#listing_id DataGoogleBigqueryAnalyticsHubListingIamPolicy#listing_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#id DataGoogleBigqueryAnalyticsHubListingIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#location DataGoogleBigqueryAnalyticsHubListingIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#project DataGoogleBigqueryAnalyticsHubListingIamPolicy#project}.

---



