# `apigeeApiProduct` Submodule <a name="`apigeeApiProduct` Submodule" id="@cdktf/provider-google.apigeeApiProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeApiProduct <a name="ApigeeApiProduct" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product google_apigee_api_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProduct(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  name: str,
  org_id: str,
  api_resources: typing.List[str] = None,
  approval_type: str = None,
  attributes: typing.Union[IResolvable, typing.List[ApigeeApiProductAttributes]] = None,
  description: str = None,
  environments: typing.List[str] = None,
  graphql_operation_group: ApigeeApiProductGraphqlOperationGroup = None,
  grpc_operation_group: ApigeeApiProductGrpcOperationGroup = None,
  id: str = None,
  operation_group: ApigeeApiProductOperationGroup = None,
  proxies: typing.List[str] = None,
  quota: str = None,
  quota_counter_scope: str = None,
  quota_interval: str = None,
  quota_time_unit: str = None,
  scopes: typing.List[str] = None,
  space: str = None,
  timeouts: ApigeeApiProductTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Name displayed in the UI or developer portal to developers registering for API access. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.name">name</a></code> | <code>str</code> | Internal name of the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.apiResources">api_resources</a></code> | <code>typing.List[str]</code> | Comma-separated list of API resources to be bundled in the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.approvalType">approval_type</a></code> | <code>str</code> | Flag that specifies how API keys are approved to access the APIs defined by the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the API product. Include key information about the API product that is not captured by other fields. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.environments">environments</a></code> | <code>typing.List[str]</code> | Comma-separated list of environment names to which the API product is bound. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.graphqlOperationGroup">graphql_operation_group</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a></code> | graphql_operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.grpcOperationGroup">grpc_operation_group</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a></code> | grpc_operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#id ApigeeApiProduct#id}. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.operationGroup">operation_group</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a></code> | operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.proxies">proxies</a></code> | <code>typing.List[str]</code> | Comma-separated list of API proxy names to which this API product is bound. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.quota">quota</a></code> | <code>str</code> | Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.quotaCounterScope">quota_counter_scope</a></code> | <code>str</code> | Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.quotaInterval">quota_interval</a></code> | <code>str</code> | Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.quotaTimeUnit">quota_time_unit</a></code> | <code>str</code> | Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Comma-separated list of OAuth scopes that are validated at runtime. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.space">space</a></code> | <code>str</code> | Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.displayName"></a>

- *Type:* str

Name displayed in the UI or developer portal to developers registering for API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#display_name ApigeeApiProduct#display_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.name"></a>

- *Type:* str

Internal name of the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#org_id ApigeeApiProduct#org_id}

---

##### `api_resources`<sup>Optional</sup> <a name="api_resources" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.apiResources"></a>

- *Type:* typing.List[str]

Comma-separated list of API resources to be bundled in the API product.

By default, the resource paths are mapped from the proxy.pathsuffix variable.
The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the apiResources element is defined to be /forecastrss and the base path defined for the API proxy is /weather, then only requests to /weather/forecastrss are permitted by the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#api_resources ApigeeApiProduct#api_resources}

---

##### `approval_type`<sup>Optional</sup> <a name="approval_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.approvalType"></a>

- *Type:* str

Flag that specifies how API keys are approved to access the APIs defined by the API product.

Valid values are 'auto' or 'manual'. Possible values: ["auto", "manual"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#approval_type ApigeeApiProduct#approval_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.attributes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.description"></a>

- *Type:* str

Description of the API product. Include key information about the API product that is not captured by other fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#description ApigeeApiProduct#description}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.environments"></a>

- *Type:* typing.List[str]

Comma-separated list of environment names to which the API product is bound.

Requests to environments that are not listed are rejected.
By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#environments ApigeeApiProduct#environments}

---

##### `graphql_operation_group`<sup>Optional</sup> <a name="graphql_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.graphqlOperationGroup"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

graphql_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#graphql_operation_group ApigeeApiProduct#graphql_operation_group}

---

##### `grpc_operation_group`<sup>Optional</sup> <a name="grpc_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.grpcOperationGroup"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

grpc_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#grpc_operation_group ApigeeApiProduct#grpc_operation_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#id ApigeeApiProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation_group`<sup>Optional</sup> <a name="operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.operationGroup"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_group ApigeeApiProduct#operation_group}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.proxies"></a>

- *Type:* typing.List[str]

Comma-separated list of API proxy names to which this API product is bound.

By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies.
Apigee rejects requests to API proxies that are not listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#proxies ApigeeApiProduct#proxies}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.quota"></a>

- *Type:* str

Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit.

For example, a quota of 50, for a quotaInterval of 12 and a quotaTimeUnit of hours means 50 requests are allowed every 12 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

##### `quota_counter_scope`<sup>Optional</sup> <a name="quota_counter_scope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.quotaCounterScope"></a>

- *Type:* str

Scope of the quota decides how the quota counter gets applied and evaluate for quota violation.

If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. Possible values: ["QUOTA_COUNTER_SCOPE_UNSPECIFIED", "PROXY", "OPERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota_counter_scope ApigeeApiProduct#quota_counter_scope}

---

##### `quota_interval`<sup>Optional</sup> <a name="quota_interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.quotaInterval"></a>

- *Type:* str

Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota_interval ApigeeApiProduct#quota_interval}

---

##### `quota_time_unit`<sup>Optional</sup> <a name="quota_time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.quotaTimeUnit"></a>

- *Type:* str

Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota_time_unit ApigeeApiProduct#quota_time_unit}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Comma-separated list of OAuth scopes that are validated at runtime.

Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#scopes ApigeeApiProduct#scopes}

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.space"></a>

- *Type:* str

Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#space ApigeeApiProduct#space}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#timeouts ApigeeApiProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGraphqlOperationGroup">put_graphql_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGrpcOperationGroup">put_grpc_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putOperationGroup">put_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApiResources">reset_api_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApprovalType">reset_approval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetEnvironments">reset_environments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGraphqlOperationGroup">reset_graphql_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGrpcOperationGroup">reset_grpc_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOperationGroup">reset_operation_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetProxies">reset_proxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuota">reset_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaCounterScope">reset_quota_counter_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaInterval">reset_quota_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaTimeUnit">reset_quota_time_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetSpace">reset_space</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putAttributes"></a>

```python
def put_attributes(
  value: typing.Union[IResolvable, typing.List[ApigeeApiProductAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]]

---

##### `put_graphql_operation_group` <a name="put_graphql_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGraphqlOperationGroup"></a>

```python
def put_graphql_operation_group(
  operation_configs: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigs]] = None,
  operation_config_type: str = None
) -> None
```

###### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGraphqlOperationGroup.parameter.operationConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

###### `operation_config_type`<sup>Optional</sup> <a name="operation_config_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGraphqlOperationGroup.parameter.operationConfigType"></a>

- *Type:* str

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_config_type ApigeeApiProduct#operation_config_type}

---

##### `put_grpc_operation_group` <a name="put_grpc_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGrpcOperationGroup"></a>

```python
def put_grpc_operation_group(
  operation_configs: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigs]] = None
) -> None
```

###### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGrpcOperationGroup.parameter.operationConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

##### `put_operation_group` <a name="put_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putOperationGroup"></a>

```python
def put_operation_group(
  operation_configs: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigs]] = None,
  operation_config_type: str = None
) -> None
```

###### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putOperationGroup.parameter.operationConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

###### `operation_config_type`<sup>Optional</sup> <a name="operation_config_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putOperationGroup.parameter.operationConfigType"></a>

- *Type:* str

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_config_type ApigeeApiProduct#operation_config_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#create ApigeeApiProduct#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#delete ApigeeApiProduct#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#update ApigeeApiProduct#update}.

---

##### `reset_api_resources` <a name="reset_api_resources" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApiResources"></a>

```python
def reset_api_resources() -> None
```

##### `reset_approval_type` <a name="reset_approval_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApprovalType"></a>

```python
def reset_approval_type() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environments` <a name="reset_environments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetEnvironments"></a>

```python
def reset_environments() -> None
```

##### `reset_graphql_operation_group` <a name="reset_graphql_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGraphqlOperationGroup"></a>

```python
def reset_graphql_operation_group() -> None
```

##### `reset_grpc_operation_group` <a name="reset_grpc_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGrpcOperationGroup"></a>

```python
def reset_grpc_operation_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_operation_group` <a name="reset_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOperationGroup"></a>

```python
def reset_operation_group() -> None
```

##### `reset_proxies` <a name="reset_proxies" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetProxies"></a>

```python
def reset_proxies() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuota"></a>

```python
def reset_quota() -> None
```

##### `reset_quota_counter_scope` <a name="reset_quota_counter_scope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaCounterScope"></a>

```python
def reset_quota_counter_scope() -> None
```

##### `reset_quota_interval` <a name="reset_quota_interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaInterval"></a>

```python
def reset_quota_interval() -> None
```

##### `reset_quota_time_unit` <a name="reset_quota_time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaTimeUnit"></a>

```python
def reset_quota_time_unit() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_space` <a name="reset_space" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetSpace"></a>

```python
def reset_space() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeApiProduct resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProduct.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProduct.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeApiProduct resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeApiProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeApiProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeApiProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList">ApigeeApiProductAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroup">graphql_operation_group</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference">ApigeeApiProductGraphqlOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroup">grpc_operation_group</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference">ApigeeApiProductGrpcOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lastModifiedAt">last_modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroup">operation_group</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference">ApigeeApiProductOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference">ApigeeApiProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResourcesInput">api_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalTypeInput">approval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributesInput">attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environmentsInput">environments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroupInput">graphql_operation_group_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroupInput">grpc_operation_group_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroupInput">operation_group_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxiesInput">proxies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScopeInput">quota_counter_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInput">quota_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaIntervalInput">quota_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnitInput">quota_time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.spaceInput">space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResources">api_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalType">approval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environments">environments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxies">proxies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quota">quota</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScope">quota_counter_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInterval">quota_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnit">quota_time_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.space">space</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributes"></a>

```python
attributes: ApigeeApiProductAttributesList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList">ApigeeApiProductAttributesList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `graphql_operation_group`<sup>Required</sup> <a name="graphql_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroup"></a>

```python
graphql_operation_group: ApigeeApiProductGraphqlOperationGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference">ApigeeApiProductGraphqlOperationGroupOutputReference</a>

---

##### `grpc_operation_group`<sup>Required</sup> <a name="grpc_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroup"></a>

```python
grpc_operation_group: ApigeeApiProductGrpcOperationGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference">ApigeeApiProductGrpcOperationGroupOutputReference</a>

---

##### `last_modified_at`<sup>Required</sup> <a name="last_modified_at" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lastModifiedAt"></a>

```python
last_modified_at: str
```

- *Type:* str

---

##### `operation_group`<sup>Required</sup> <a name="operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroup"></a>

```python
operation_group: ApigeeApiProductOperationGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference">ApigeeApiProductOperationGroupOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeouts"></a>

```python
timeouts: ApigeeApiProductTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference">ApigeeApiProductTimeoutsOutputReference</a>

---

##### `api_resources_input`<sup>Optional</sup> <a name="api_resources_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResourcesInput"></a>

```python
api_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approval_type_input`<sup>Optional</sup> <a name="approval_type_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalTypeInput"></a>

```python
approval_type_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributesInput"></a>

```python
attributes_input: typing.Union[IResolvable, typing.List[ApigeeApiProductAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `environments_input`<sup>Optional</sup> <a name="environments_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environmentsInput"></a>

```python
environments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `graphql_operation_group_input`<sup>Optional</sup> <a name="graphql_operation_group_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroupInput"></a>

```python
graphql_operation_group_input: ApigeeApiProductGraphqlOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

---

##### `grpc_operation_group_input`<sup>Optional</sup> <a name="grpc_operation_group_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroupInput"></a>

```python
grpc_operation_group_input: ApigeeApiProductGrpcOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operation_group_input`<sup>Optional</sup> <a name="operation_group_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroupInput"></a>

```python
operation_group_input: ApigeeApiProductOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `proxies_input`<sup>Optional</sup> <a name="proxies_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxiesInput"></a>

```python
proxies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quota_counter_scope_input`<sup>Optional</sup> <a name="quota_counter_scope_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScopeInput"></a>

```python
quota_counter_scope_input: str
```

- *Type:* str

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInput"></a>

```python
quota_input: str
```

- *Type:* str

---

##### `quota_interval_input`<sup>Optional</sup> <a name="quota_interval_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaIntervalInput"></a>

```python
quota_interval_input: str
```

- *Type:* str

---

##### `quota_time_unit_input`<sup>Optional</sup> <a name="quota_time_unit_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnitInput"></a>

```python
quota_time_unit_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `space_input`<sup>Optional</sup> <a name="space_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.spaceInput"></a>

```python
space_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeApiProductTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>]

---

##### `api_resources`<sup>Required</sup> <a name="api_resources" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResources"></a>

```python
api_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approval_type`<sup>Required</sup> <a name="approval_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalType"></a>

```python
approval_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environments"></a>

```python
environments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `proxies`<sup>Required</sup> <a name="proxies" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxies"></a>

```python
proxies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quota"></a>

```python
quota: str
```

- *Type:* str

---

##### `quota_counter_scope`<sup>Required</sup> <a name="quota_counter_scope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScope"></a>

```python
quota_counter_scope: str
```

- *Type:* str

---

##### `quota_interval`<sup>Required</sup> <a name="quota_interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInterval"></a>

```python
quota_interval: str
```

- *Type:* str

---

##### `quota_time_unit`<sup>Required</sup> <a name="quota_time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnit"></a>

```python
quota_time_unit: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.space"></a>

```python
space: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeApiProductAttributes <a name="ApigeeApiProductAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductConfig <a name="ApigeeApiProductConfig" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  name: str,
  org_id: str,
  api_resources: typing.List[str] = None,
  approval_type: str = None,
  attributes: typing.Union[IResolvable, typing.List[ApigeeApiProductAttributes]] = None,
  description: str = None,
  environments: typing.List[str] = None,
  graphql_operation_group: ApigeeApiProductGraphqlOperationGroup = None,
  grpc_operation_group: ApigeeApiProductGrpcOperationGroup = None,
  id: str = None,
  operation_group: ApigeeApiProductOperationGroup = None,
  proxies: typing.List[str] = None,
  quota: str = None,
  quota_counter_scope: str = None,
  quota_interval: str = None,
  quota_time_unit: str = None,
  scopes: typing.List[str] = None,
  space: str = None,
  timeouts: ApigeeApiProductTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.displayName">display_name</a></code> | <code>str</code> | Name displayed in the UI or developer portal to developers registering for API access. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.name">name</a></code> | <code>str</code> | Internal name of the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.apiResources">api_resources</a></code> | <code>typing.List[str]</code> | Comma-separated list of API resources to be bundled in the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.approvalType">approval_type</a></code> | <code>str</code> | Flag that specifies how API keys are approved to access the APIs defined by the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.description">description</a></code> | <code>str</code> | Description of the API product. Include key information about the API product that is not captured by other fields. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.environments">environments</a></code> | <code>typing.List[str]</code> | Comma-separated list of environment names to which the API product is bound. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.graphqlOperationGroup">graphql_operation_group</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a></code> | graphql_operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.grpcOperationGroup">grpc_operation_group</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a></code> | grpc_operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#id ApigeeApiProduct#id}. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.operationGroup">operation_group</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a></code> | operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.proxies">proxies</a></code> | <code>typing.List[str]</code> | Comma-separated list of API proxy names to which this API product is bound. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quota">quota</a></code> | <code>str</code> | Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaCounterScope">quota_counter_scope</a></code> | <code>str</code> | Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaInterval">quota_interval</a></code> | <code>str</code> | Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaTimeUnit">quota_time_unit</a></code> | <code>str</code> | Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Comma-separated list of OAuth scopes that are validated at runtime. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.space">space</a></code> | <code>str</code> | Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Name displayed in the UI or developer portal to developers registering for API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#display_name ApigeeApiProduct#display_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Internal name of the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#org_id ApigeeApiProduct#org_id}

---

##### `api_resources`<sup>Optional</sup> <a name="api_resources" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.apiResources"></a>

```python
api_resources: typing.List[str]
```

- *Type:* typing.List[str]

Comma-separated list of API resources to be bundled in the API product.

By default, the resource paths are mapped from the proxy.pathsuffix variable.
The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the apiResources element is defined to be /forecastrss and the base path defined for the API proxy is /weather, then only requests to /weather/forecastrss are permitted by the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#api_resources ApigeeApiProduct#api_resources}

---

##### `approval_type`<sup>Optional</sup> <a name="approval_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.approvalType"></a>

```python
approval_type: str
```

- *Type:* str

Flag that specifies how API keys are approved to access the APIs defined by the API product.

Valid values are 'auto' or 'manual'. Possible values: ["auto", "manual"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#approval_type ApigeeApiProduct#approval_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.attributes"></a>

```python
attributes: typing.Union[IResolvable, typing.List[ApigeeApiProductAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the API product. Include key information about the API product that is not captured by other fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#description ApigeeApiProduct#description}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.environments"></a>

```python
environments: typing.List[str]
```

- *Type:* typing.List[str]

Comma-separated list of environment names to which the API product is bound.

Requests to environments that are not listed are rejected.
By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#environments ApigeeApiProduct#environments}

---

##### `graphql_operation_group`<sup>Optional</sup> <a name="graphql_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.graphqlOperationGroup"></a>

```python
graphql_operation_group: ApigeeApiProductGraphqlOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

graphql_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#graphql_operation_group ApigeeApiProduct#graphql_operation_group}

---

##### `grpc_operation_group`<sup>Optional</sup> <a name="grpc_operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.grpcOperationGroup"></a>

```python
grpc_operation_group: ApigeeApiProductGrpcOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

grpc_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#grpc_operation_group ApigeeApiProduct#grpc_operation_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#id ApigeeApiProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation_group`<sup>Optional</sup> <a name="operation_group" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.operationGroup"></a>

```python
operation_group: ApigeeApiProductOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_group ApigeeApiProduct#operation_group}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.proxies"></a>

```python
proxies: typing.List[str]
```

- *Type:* typing.List[str]

Comma-separated list of API proxy names to which this API product is bound.

By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies.
Apigee rejects requests to API proxies that are not listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#proxies ApigeeApiProduct#proxies}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quota"></a>

```python
quota: str
```

- *Type:* str

Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit.

For example, a quota of 50, for a quotaInterval of 12 and a quotaTimeUnit of hours means 50 requests are allowed every 12 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

##### `quota_counter_scope`<sup>Optional</sup> <a name="quota_counter_scope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaCounterScope"></a>

```python
quota_counter_scope: str
```

- *Type:* str

Scope of the quota decides how the quota counter gets applied and evaluate for quota violation.

If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. Possible values: ["QUOTA_COUNTER_SCOPE_UNSPECIFIED", "PROXY", "OPERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota_counter_scope ApigeeApiProduct#quota_counter_scope}

---

##### `quota_interval`<sup>Optional</sup> <a name="quota_interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaInterval"></a>

```python
quota_interval: str
```

- *Type:* str

Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota_interval ApigeeApiProduct#quota_interval}

---

##### `quota_time_unit`<sup>Optional</sup> <a name="quota_time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaTimeUnit"></a>

```python
quota_time_unit: str
```

- *Type:* str

Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota_time_unit ApigeeApiProduct#quota_time_unit}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Comma-separated list of OAuth scopes that are validated at runtime.

Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#scopes ApigeeApiProduct#scopes}

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.space"></a>

```python
space: str
```

- *Type:* str

Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#space ApigeeApiProduct#space}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.timeouts"></a>

```python
timeouts: ApigeeApiProductTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#timeouts ApigeeApiProduct#timeouts}

---

### ApigeeApiProductGraphqlOperationGroup <a name="ApigeeApiProductGraphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup(
  operation_configs: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigs]] = None,
  operation_config_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigs">operation_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]</code> | operation_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigType">operation_config_type</a></code> | <code>str</code> | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. |

---

##### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigs"></a>

```python
operation_configs: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

##### `operation_config_type`<sup>Optional</sup> <a name="operation_config_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigType"></a>

```python
operation_config_type: str
```

- *Type:* str

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_config_type ApigeeApiProduct#operation_config_type}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigs <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs(
  api_source: str = None,
  attributes: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]] = None,
  operations: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]] = None,
  quota: ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.apiSource">api_source</a></code> | <code>str</code> | Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]</code> | operations block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | quota block. |

---

##### `api_source`<sup>Optional</sup> <a name="api_source" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#api_source ApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.attributes"></a>

```python
attributes: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.operations"></a>

```python
operations: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operations ApigeeApiProduct#operations}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.quota"></a>

```python
quota: ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations(
  operation: str = None,
  operation_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operation">operation</a></code> | <code>str</code> | GraphQL operation name. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operationTypes">operation_types</a></code> | <code>typing.List[str]</code> | Required. GraphQL operation types. Valid values include query or mutation. Note: Apigee does not currently support subscription types. |

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operation"></a>

```python
operation: str
```

- *Type:* str

GraphQL operation name.

The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation ApigeeApiProduct#operation}

---

##### `operation_types`<sup>Optional</sup> <a name="operation_types" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operationTypes"></a>

```python
operation_types: typing.List[str]
```

- *Type:* typing.List[str]

Required. GraphQL operation types. Valid values include query or mutation. Note: Apigee does not currently support subscription types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_types ApigeeApiProduct#operation_types}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>str</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>str</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.timeUnit">time_unit</a></code> | <code>str</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.interval"></a>

```python
interval: str
```

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.limit"></a>

```python
limit: str
```

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

##### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

### ApigeeApiProductGrpcOperationGroup <a name="ApigeeApiProductGrpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGrpcOperationGroup(
  operation_configs: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigs]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup.property.operationConfigs">operation_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]</code> | operation_configs block. |

---

##### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup.property.operationConfigs"></a>

```python
operation_configs: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

### ApigeeApiProductGrpcOperationGroupOperationConfigs <a name="ApigeeApiProductGrpcOperationGroupOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs(
  api_source: str = None,
  attributes: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]] = None,
  methods: typing.List[str] = None,
  quota: ApigeeApiProductGrpcOperationGroupOperationConfigsQuota = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.apiSource">api_source</a></code> | <code>str</code> | Required. Name of the API proxy with which the gRPC operation and quota are associated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.methods">methods</a></code> | <code>typing.List[str]</code> | List of unqualified gRPC method names for the proxy to which quota will be applied. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.service">service</a></code> | <code>str</code> | Required. |

---

##### `api_source`<sup>Optional</sup> <a name="api_source" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

Required. Name of the API proxy with which the gRPC operation and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#api_source ApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.attributes"></a>

```python
attributes: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

List of unqualified gRPC method names for the proxy to which quota will be applied.

If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy.

Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply ["ListPets", "GetPet"].

Note: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#methods ApigeeApiProduct#methods}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.quota"></a>

```python
quota: ApigeeApiProductGrpcOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.service"></a>

```python
service: str
```

- *Type:* str

Required.

gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#service ApigeeApiProduct#service}

---

### ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductGrpcOperationGroupOperationConfigsQuota <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>str</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>str</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.timeUnit">time_unit</a></code> | <code>str</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.interval"></a>

```python
interval: str
```

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.limit"></a>

```python
limit: str
```

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

##### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

### ApigeeApiProductOperationGroup <a name="ApigeeApiProductOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroup(
  operation_configs: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigs]] = None,
  operation_config_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigs">operation_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>]]</code> | operation_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigType">operation_config_type</a></code> | <code>str</code> | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. |

---

##### `operation_configs`<sup>Optional</sup> <a name="operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigs"></a>

```python
operation_configs: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>]]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

##### `operation_config_type`<sup>Optional</sup> <a name="operation_config_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigType"></a>

```python
operation_config_type: str
```

- *Type:* str

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_config_type ApigeeApiProduct#operation_config_type}

---

### ApigeeApiProductOperationGroupOperationConfigs <a name="ApigeeApiProductOperationGroupOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs(
  api_source: str = None,
  attributes: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigsAttributes]] = None,
  operations: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigsOperations]] = None,
  quota: ApigeeApiProductOperationGroupOperationConfigsQuota = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.apiSource">api_source</a></code> | <code>str</code> | Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>]]</code> | operations block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | quota block. |

---

##### `api_source`<sup>Optional</sup> <a name="api_source" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#api_source ApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.attributes"></a>

```python
attributes: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.operations"></a>

```python
operations: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operations ApigeeApiProduct#operations}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.quota"></a>

```python
quota: ApigeeApiProductOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

### ApigeeApiProductOperationGroupOperationConfigsAttributes <a name="ApigeeApiProductOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductOperationGroupOperationConfigsOperations <a name="ApigeeApiProductOperationGroupOperationConfigsOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations(
  methods: typing.List[str] = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.methods">methods</a></code> | <code>typing.List[str]</code> | Methods refers to the REST verbs, when none specified, all verb types are allowed. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.resource">resource</a></code> | <code>str</code> | Required. REST resource path associated with the API proxy or remote service. |

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

Methods refers to the REST verbs, when none specified, all verb types are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#methods ApigeeApiProduct#methods}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.resource"></a>

```python
resource: str
```

- *Type:* str

Required. REST resource path associated with the API proxy or remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#resource ApigeeApiProduct#resource}

---

### ApigeeApiProductOperationGroupOperationConfigsQuota <a name="ApigeeApiProductOperationGroupOperationConfigsQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>str</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>str</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.timeUnit">time_unit</a></code> | <code>str</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.interval"></a>

```python
interval: str
```

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.limit"></a>

```python
limit: str
```

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

##### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

### ApigeeApiProductTimeouts <a name="ApigeeApiProductTimeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#create ApigeeApiProduct#create}. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#delete ApigeeApiProduct#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#update ApigeeApiProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#create ApigeeApiProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#delete ApigeeApiProduct#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#update ApigeeApiProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeApiProductAttributesList <a name="ApigeeApiProductAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeApiProductAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeApiProductAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]]

---


### ApigeeApiProductAttributesOutputReference <a name="ApigeeApiProductAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeApiProductAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes">ApigeeApiProductAttributes</a>]

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsList <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperation">reset_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperationTypes">reset_operation_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operation` <a name="reset_operation" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperation"></a>

```python
def reset_operation() -> None
```

##### `reset_operation_types` <a name="reset_operation_types" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperationTypes"></a>

```python
def reset_operation_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypesInput">operation_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypes">operation_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `operation_types_input`<sup>Optional</sup> <a name="operation_types_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypesInput"></a>

```python
operation_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `operation_types`<sup>Required</sup> <a name="operation_types" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypes"></a>

```python
operation_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations">put_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota">put_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetApiSource">reset_api_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetQuota">reset_quota</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```python
def put_attributes(
  value: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]

---

##### `put_operations` <a name="put_operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations"></a>

```python
def put_operations(
  value: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]

---

##### `put_quota` <a name="put_quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota"></a>

```python
def put_quota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
) -> None
```

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota.parameter.interval"></a>

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota.parameter.limit"></a>

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

###### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota.parameter.timeUnit"></a>

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

##### `reset_api_source` <a name="reset_api_source" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```python
def reset_api_source() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_operations` <a name="reset_operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```python
def reset_quota() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSourceInput">api_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quotaInput">quota_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSource">api_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```python
attributes: ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList</a>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operations"></a>

```python
operations: ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quota"></a>

```python
quota: ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `api_source_input`<sup>Optional</sup> <a name="api_source_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```python
api_source_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>]]

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operationsInput"></a>

```python
operations_input: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>]]

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```python
quota_input: ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---

##### `api_source`<sup>Required</sup> <a name="api_source" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeApiProductGraphqlOperationGroupOperationConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">reset_time_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_time_unit` <a name="reset_time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```python
def reset_time_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```python
limit_input: str
```

- *Type:* str

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```python
limit: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---


### ApigeeApiProductGraphqlOperationGroupOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs">put_operation_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigs">reset_operation_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigType">reset_operation_config_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operation_configs` <a name="put_operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs"></a>

```python
def put_operation_configs(
  value: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]

---

##### `reset_operation_configs` <a name="reset_operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigs"></a>

```python
def reset_operation_configs() -> None
```

##### `reset_operation_config_type` <a name="reset_operation_config_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigType"></a>

```python
def reset_operation_config_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigs">operation_configs</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigsInput">operation_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigTypeInput">operation_config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigType">operation_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_configs`<sup>Required</sup> <a name="operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigs"></a>

```python
operation_configs: ApigeeApiProductGraphqlOperationGroupOperationConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsList</a>

---

##### `operation_configs_input`<sup>Optional</sup> <a name="operation_configs_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigsInput"></a>

```python
operation_configs_input: typing.Union[IResolvable, typing.List[ApigeeApiProductGraphqlOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs">ApigeeApiProductGraphqlOperationGroupOperationConfigs</a>]]

---

##### `operation_config_type_input`<sup>Optional</sup> <a name="operation_config_type_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigTypeInput"></a>

```python
operation_config_type_input: str
```

- *Type:* str

---

##### `operation_config_type`<sup>Required</sup> <a name="operation_config_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigType"></a>

```python
operation_config_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeApiProductGraphqlOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsList <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota">put_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetApiSource">reset_api_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetMethods">reset_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetQuota">reset_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```python
def put_attributes(
  value: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]

---

##### `put_quota` <a name="put_quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota"></a>

```python
def put_quota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
) -> None
```

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota.parameter.interval"></a>

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota.parameter.limit"></a>

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

###### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota.parameter.timeUnit"></a>

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

##### `reset_api_source` <a name="reset_api_source" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```python
def reset_api_source() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_methods` <a name="reset_methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetMethods"></a>

```python
def reset_methods() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```python
def reset_quota() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSourceInput">api_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quotaInput">quota_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSource">api_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```python
attributes: ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quota"></a>

```python
quota: ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `api_source_input`<sup>Optional</sup> <a name="api_source_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```python
api_source_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>]]

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```python
quota_input: ApigeeApiProductGrpcOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `api_source`<sup>Required</sup> <a name="api_source" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeApiProductGrpcOperationGroupOperationConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>]

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">reset_time_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_time_unit` <a name="reset_time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```python
def reset_time_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```python
limit_input: str
```

- *Type:* str

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```python
limit: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeApiProductGrpcOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---


### ApigeeApiProductGrpcOperationGroupOutputReference <a name="ApigeeApiProductGrpcOperationGroupOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs">put_operation_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resetOperationConfigs">reset_operation_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operation_configs` <a name="put_operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs"></a>

```python
def put_operation_configs(
  value: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]

---

##### `reset_operation_configs` <a name="reset_operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resetOperationConfigs"></a>

```python
def reset_operation_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigs">operation_configs</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList">ApigeeApiProductGrpcOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigsInput">operation_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_configs`<sup>Required</sup> <a name="operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigs"></a>

```python
operation_configs: ApigeeApiProductGrpcOperationGroupOperationConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList">ApigeeApiProductGrpcOperationGroupOperationConfigsList</a>

---

##### `operation_configs_input`<sup>Optional</sup> <a name="operation_configs_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigsInput"></a>

```python
operation_configs_input: typing.Union[IResolvable, typing.List[ApigeeApiProductGrpcOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs">ApigeeApiProductGrpcOperationGroupOperationConfigs</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeApiProductGrpcOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

---


### ApigeeApiProductOperationGroupOperationConfigsAttributesList <a name="ApigeeApiProductOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]

---


### ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeApiProductOperationGroupOperationConfigsAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>]

---


### ApigeeApiProductOperationGroupOperationConfigsList <a name="ApigeeApiProductOperationGroupOperationConfigsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeApiProductOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>]]

---


### ApigeeApiProductOperationGroupOperationConfigsOperationsList <a name="ApigeeApiProductOperationGroupOperationConfigsOperationsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>]]

---


### ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetMethods">reset_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_methods` <a name="reset_methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetMethods"></a>

```python
def reset_methods() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeApiProductOperationGroupOperationConfigsOperations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>]

---


### ApigeeApiProductOperationGroupOperationConfigsOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations">put_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota">put_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetApiSource">reset_api_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetQuota">reset_quota</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```python
def put_attributes(
  value: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigsAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]

---

##### `put_operations` <a name="put_operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations"></a>

```python
def put_operations(
  value: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigsOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>]]

---

##### `put_quota` <a name="put_quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota"></a>

```python
def put_quota(
  interval: str = None,
  limit: str = None,
  time_unit: str = None
) -> None
```

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota.parameter.interval"></a>

- *Type:* str

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota.parameter.limit"></a>

- *Type:* str

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

###### `time_unit`<sup>Optional</sup> <a name="time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota.parameter.timeUnit"></a>

- *Type:* str

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

##### `reset_api_source` <a name="reset_api_source" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```python
def reset_api_source() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_operations` <a name="reset_operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```python
def reset_quota() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList">ApigeeApiProductOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList">ApigeeApiProductOperationGroupOperationConfigsOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSourceInput">api_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quotaInput">quota_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSource">api_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```python
attributes: ApigeeApiProductOperationGroupOperationConfigsAttributesList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList">ApigeeApiProductOperationGroupOperationConfigsAttributesList</a>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operations"></a>

```python
operations: ApigeeApiProductOperationGroupOperationConfigsOperationsList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList">ApigeeApiProductOperationGroupOperationConfigsOperationsList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quota"></a>

```python
quota: ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `api_source_input`<sup>Optional</sup> <a name="api_source_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```python
api_source_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigsAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes">ApigeeApiProductOperationGroupOperationConfigsAttributes</a>]]

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operationsInput"></a>

```python
operations_input: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigsOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations">ApigeeApiProductOperationGroupOperationConfigsOperations</a>]]

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```python
quota_input: ApigeeApiProductOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

---

##### `api_source`<sup>Required</sup> <a name="api_source" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```python
api_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeApiProductOperationGroupOperationConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>]

---


### ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">reset_time_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_time_unit` <a name="reset_time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```python
def reset_time_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```python
limit_input: str
```

- *Type:* str

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```python
limit: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeApiProductOperationGroupOperationConfigsQuota
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

---


### ApigeeApiProductOperationGroupOutputReference <a name="ApigeeApiProductOperationGroupOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.putOperationConfigs">put_operation_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigs">reset_operation_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigType">reset_operation_config_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operation_configs` <a name="put_operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.putOperationConfigs"></a>

```python
def put_operation_configs(
  value: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>]]

---

##### `reset_operation_configs` <a name="reset_operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigs"></a>

```python
def reset_operation_configs() -> None
```

##### `reset_operation_config_type` <a name="reset_operation_config_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigType"></a>

```python
def reset_operation_config_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigs">operation_configs</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList">ApigeeApiProductOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigsInput">operation_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigTypeInput">operation_config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigType">operation_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_configs`<sup>Required</sup> <a name="operation_configs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigs"></a>

```python
operation_configs: ApigeeApiProductOperationGroupOperationConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList">ApigeeApiProductOperationGroupOperationConfigsList</a>

---

##### `operation_configs_input`<sup>Optional</sup> <a name="operation_configs_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigsInput"></a>

```python
operation_configs_input: typing.Union[IResolvable, typing.List[ApigeeApiProductOperationGroupOperationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs">ApigeeApiProductOperationGroupOperationConfigs</a>]]

---

##### `operation_config_type_input`<sup>Optional</sup> <a name="operation_config_type_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigTypeInput"></a>

```python
operation_config_type_input: str
```

- *Type:* str

---

##### `operation_config_type`<sup>Required</sup> <a name="operation_config_type" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigType"></a>

```python
operation_config_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeApiProductOperationGroup
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

---


### ApigeeApiProductTimeoutsOutputReference <a name="ApigeeApiProductTimeoutsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_api_product

apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeApiProductTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>]

---



