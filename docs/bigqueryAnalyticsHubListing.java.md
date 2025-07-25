# `bigqueryAnalyticsHubListing` Submodule <a name="`bigqueryAnalyticsHubListing` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubListing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubListing <a name="BigqueryAnalyticsHubListing" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing google_bigquery_analytics_hub_listing}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListing;

BigqueryAnalyticsHubListing.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dataExchangeId(java.lang.String)
    .displayName(java.lang.String)
    .listingId(java.lang.String)
    .location(java.lang.String)
//  .bigqueryDataset(BigqueryAnalyticsHubListingBigqueryDataset)
//  .categories(java.util.List<java.lang.String>)
//  .dataProvider(BigqueryAnalyticsHubListingDataProvider)
//  .description(java.lang.String)
//  .documentation(java.lang.String)
//  .icon(java.lang.String)
//  .id(java.lang.String)
//  .logLinkedDatasetQueryUserEmail(java.lang.Boolean)
//  .logLinkedDatasetQueryUserEmail(IResolvable)
//  .primaryContact(java.lang.String)
//  .project(java.lang.String)
//  .publisher(BigqueryAnalyticsHubListingPublisher)
//  .pubsubTopic(BigqueryAnalyticsHubListingPubsubTopic)
//  .requestAccess(java.lang.String)
//  .restrictedExportConfig(BigqueryAnalyticsHubListingRestrictedExportConfig)
//  .timeouts(BigqueryAnalyticsHubListingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.listingId">listingId</a></code> | <code>java.lang.String</code> | The ID of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The name of the location this data exchange listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.bigqueryDataset">bigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a></code> | bigquery_dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Categories of the listing. Up to two categories are allowed. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.dataProvider">dataProvider</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a></code> | data_provider block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Short description of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.documentation">documentation</a></code> | <code>java.lang.String</code> | Documentation describing the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.icon">icon</a></code> | <code>java.lang.String</code> | Base64 encoded image representing the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#id BigqueryAnalyticsHubListing#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.logLinkedDatasetQueryUserEmail">logLinkedDatasetQueryUserEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, subscriber email logging is enabled and all queries on the linked dataset will log the email address of the querying user. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | Email or URL of the primary point of contact of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#project BigqueryAnalyticsHubListing#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.publisher">publisher</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a></code> | publisher block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.pubsubTopic">pubsubTopic</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic">BigqueryAnalyticsHubListingPubsubTopic</a></code> | pubsub_topic block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.requestAccess">requestAccess</a></code> | <code>java.lang.String</code> | Email or URL of the request access of the listing. Subscribers can use this reference to request access. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.restrictedExportConfig">restrictedExportConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | restricted_export_config block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.dataExchangeId"></a>

- *Type:* java.lang.String

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#data_exchange_id BigqueryAnalyticsHubListing#data_exchange_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable display name of the listing.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#display_name BigqueryAnalyticsHubListing#display_name}

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.listingId"></a>

- *Type:* java.lang.String

The ID of the listing.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#listing_id BigqueryAnalyticsHubListing#listing_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The name of the location this data exchange listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#location BigqueryAnalyticsHubListing#location}

---

##### `bigqueryDataset`<sup>Optional</sup> <a name="bigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.bigqueryDataset"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

bigquery_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#bigquery_dataset BigqueryAnalyticsHubListing#bigquery_dataset}

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.categories"></a>

- *Type:* java.util.List<java.lang.String>

Categories of the listing. Up to two categories are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#categories BigqueryAnalyticsHubListing#categories}

---

##### `dataProvider`<sup>Optional</sup> <a name="dataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.dataProvider"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

data_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#data_provider BigqueryAnalyticsHubListing#data_provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Short description of the listing.

The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#description BigqueryAnalyticsHubListing#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.documentation"></a>

- *Type:* java.lang.String

Documentation describing the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#documentation BigqueryAnalyticsHubListing#documentation}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.icon"></a>

- *Type:* java.lang.String

Base64 encoded image representing the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#icon BigqueryAnalyticsHubListing#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#id BigqueryAnalyticsHubListing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLinkedDatasetQueryUserEmail`<sup>Optional</sup> <a name="logLinkedDatasetQueryUserEmail" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.logLinkedDatasetQueryUserEmail"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, subscriber email logging is enabled and all queries on the linked dataset will log the email address of the querying user.

Once enabled, this setting cannot be turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#log_linked_dataset_query_user_email BigqueryAnalyticsHubListing#log_linked_dataset_query_user_email}

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.primaryContact"></a>

- *Type:* java.lang.String

Email or URL of the primary point of contact of the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#project BigqueryAnalyticsHubListing#project}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.publisher"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

publisher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#publisher BigqueryAnalyticsHubListing#publisher}

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.pubsubTopic"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic">BigqueryAnalyticsHubListingPubsubTopic</a>

pubsub_topic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#pubsub_topic BigqueryAnalyticsHubListing#pubsub_topic}

---

##### `requestAccess`<sup>Optional</sup> <a name="requestAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.requestAccess"></a>

- *Type:* java.lang.String

Email or URL of the request access of the listing. Subscribers can use this reference to request access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#request_access BigqueryAnalyticsHubListing#request_access}

---

##### `restrictedExportConfig`<sup>Optional</sup> <a name="restrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.restrictedExportConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

restricted_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#restricted_export_config BigqueryAnalyticsHubListing#restricted_export_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#timeouts BigqueryAnalyticsHubListing#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putBigqueryDataset">putBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putDataProvider">putDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPublisher">putPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPubsubTopic">putPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putRestrictedExportConfig">putRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetBigqueryDataset">resetBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDataProvider">resetDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDocumentation">resetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetIcon">resetIcon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetLogLinkedDatasetQueryUserEmail">resetLogLinkedDatasetQueryUserEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPrimaryContact">resetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPublisher">resetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRequestAccess">resetRequestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRestrictedExportConfig">resetRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryDataset` <a name="putBigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putBigqueryDataset"></a>

```java
public void putBigqueryDataset(BigqueryAnalyticsHubListingBigqueryDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putBigqueryDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

---

##### `putDataProvider` <a name="putDataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putDataProvider"></a>

```java
public void putDataProvider(BigqueryAnalyticsHubListingDataProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putDataProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

---

##### `putPublisher` <a name="putPublisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPublisher"></a>

```java
public void putPublisher(BigqueryAnalyticsHubListingPublisher value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPublisher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

---

##### `putPubsubTopic` <a name="putPubsubTopic" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPubsubTopic"></a>

```java
public void putPubsubTopic(BigqueryAnalyticsHubListingPubsubTopic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putPubsubTopic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic">BigqueryAnalyticsHubListingPubsubTopic</a>

---

##### `putRestrictedExportConfig` <a name="putRestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putRestrictedExportConfig"></a>

```java
public void putRestrictedExportConfig(BigqueryAnalyticsHubListingRestrictedExportConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putRestrictedExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putTimeouts"></a>

```java
public void putTimeouts(BigqueryAnalyticsHubListingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

---

##### `resetBigqueryDataset` <a name="resetBigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetBigqueryDataset"></a>

```java
public void resetBigqueryDataset()
```

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetCategories"></a>

```java
public void resetCategories()
```

##### `resetDataProvider` <a name="resetDataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDataProvider"></a>

```java
public void resetDataProvider()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocumentation` <a name="resetDocumentation" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetDocumentation"></a>

```java
public void resetDocumentation()
```

##### `resetIcon` <a name="resetIcon" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetIcon"></a>

```java
public void resetIcon()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetId"></a>

```java
public void resetId()
```

##### `resetLogLinkedDatasetQueryUserEmail` <a name="resetLogLinkedDatasetQueryUserEmail" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetLogLinkedDatasetQueryUserEmail"></a>

```java
public void resetLogLinkedDatasetQueryUserEmail()
```

##### `resetPrimaryContact` <a name="resetPrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPrimaryContact"></a>

```java
public void resetPrimaryContact()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetProject"></a>

```java
public void resetProject()
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPublisher"></a>

```java
public void resetPublisher()
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetPubsubTopic"></a>

```java
public void resetPubsubTopic()
```

##### `resetRequestAccess` <a name="resetRequestAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRequestAccess"></a>

```java
public void resetRequestAccess()
```

##### `resetRestrictedExportConfig` <a name="resetRestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetRestrictedExportConfig"></a>

```java
public void resetRestrictedExportConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryAnalyticsHubListing resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListing;

BigqueryAnalyticsHubListing.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListing;

BigqueryAnalyticsHubListing.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListing;

BigqueryAnalyticsHubListing.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListing;

BigqueryAnalyticsHubListing.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigqueryAnalyticsHubListing.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigqueryAnalyticsHubListing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigqueryAnalyticsHubListing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigqueryAnalyticsHubListing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubListing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDataset">bigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference">BigqueryAnalyticsHubListingBigqueryDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProvider">dataProvider</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference">BigqueryAnalyticsHubListingDataProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisher">publisher</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference">BigqueryAnalyticsHubListingPublisherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.pubsubTopic">pubsubTopic</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference">BigqueryAnalyticsHubListingPubsubTopicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfig">restrictedExportConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference">BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference">BigqueryAnalyticsHubListingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDatasetInput">bigqueryDatasetInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categoriesInput">categoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProviderInput">dataProviderInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentationInput">documentationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.iconInput">iconInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingIdInput">listingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.logLinkedDatasetQueryUserEmailInput">logLinkedDatasetQueryUserEmailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContactInput">primaryContactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisherInput">publisherInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic">BigqueryAnalyticsHubListingPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccessInput">requestAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfigInput">restrictedExportConfigInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentation">documentation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.icon">icon</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingId">listingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.logLinkedDatasetQueryUserEmail">logLinkedDatasetQueryUserEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccess">requestAccess</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bigqueryDataset`<sup>Required</sup> <a name="bigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDataset"></a>

```java
public BigqueryAnalyticsHubListingBigqueryDatasetOutputReference getBigqueryDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference">BigqueryAnalyticsHubListingBigqueryDatasetOutputReference</a>

---

##### `dataProvider`<sup>Required</sup> <a name="dataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProvider"></a>

```java
public BigqueryAnalyticsHubListingDataProviderOutputReference getDataProvider();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference">BigqueryAnalyticsHubListingDataProviderOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisher"></a>

```java
public BigqueryAnalyticsHubListingPublisherOutputReference getPublisher();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference">BigqueryAnalyticsHubListingPublisherOutputReference</a>

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.pubsubTopic"></a>

```java
public BigqueryAnalyticsHubListingPubsubTopicOutputReference getPubsubTopic();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference">BigqueryAnalyticsHubListingPubsubTopicOutputReference</a>

---

##### `restrictedExportConfig`<sup>Required</sup> <a name="restrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfig"></a>

```java
public BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference getRestrictedExportConfig();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference">BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeouts"></a>

```java
public BigqueryAnalyticsHubListingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference">BigqueryAnalyticsHubListingTimeoutsOutputReference</a>

---

##### `bigqueryDatasetInput`<sup>Optional</sup> <a name="bigqueryDatasetInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.bigqueryDatasetInput"></a>

```java
public BigqueryAnalyticsHubListingBigqueryDataset getBigqueryDatasetInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categoriesInput"></a>

```java
public java.util.List<java.lang.String> getCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeIdInput"></a>

```java
public java.lang.String getDataExchangeIdInput();
```

- *Type:* java.lang.String

---

##### `dataProviderInput`<sup>Optional</sup> <a name="dataProviderInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataProviderInput"></a>

```java
public BigqueryAnalyticsHubListingDataProvider getDataProviderInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `documentationInput`<sup>Optional</sup> <a name="documentationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentationInput"></a>

```java
public java.lang.String getDocumentationInput();
```

- *Type:* java.lang.String

---

##### `iconInput`<sup>Optional</sup> <a name="iconInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.iconInput"></a>

```java
public java.lang.String getIconInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingIdInput"></a>

```java
public java.lang.String getListingIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logLinkedDatasetQueryUserEmailInput`<sup>Optional</sup> <a name="logLinkedDatasetQueryUserEmailInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.logLinkedDatasetQueryUserEmailInput"></a>

```java
public java.lang.Object getLogLinkedDatasetQueryUserEmailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `primaryContactInput`<sup>Optional</sup> <a name="primaryContactInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContactInput"></a>

```java
public java.lang.String getPrimaryContactInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.publisherInput"></a>

```java
public BigqueryAnalyticsHubListingPublisher getPublisherInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.pubsubTopicInput"></a>

```java
public BigqueryAnalyticsHubListingPubsubTopic getPubsubTopicInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic">BigqueryAnalyticsHubListingPubsubTopic</a>

---

##### `requestAccessInput`<sup>Optional</sup> <a name="requestAccessInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccessInput"></a>

```java
public java.lang.String getRequestAccessInput();
```

- *Type:* java.lang.String

---

##### `restrictedExportConfigInput`<sup>Optional</sup> <a name="restrictedExportConfigInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.restrictedExportConfigInput"></a>

```java
public BigqueryAnalyticsHubListingRestrictedExportConfig getRestrictedExportConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.dataExchangeId"></a>

```java
public java.lang.String getDataExchangeId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.documentation"></a>

```java
public java.lang.String getDocumentation();
```

- *Type:* java.lang.String

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.icon"></a>

```java
public java.lang.String getIcon();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.listingId"></a>

```java
public java.lang.String getListingId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `logLinkedDatasetQueryUserEmail`<sup>Required</sup> <a name="logLinkedDatasetQueryUserEmail" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.logLinkedDatasetQueryUserEmail"></a>

```java
public java.lang.Object getLogLinkedDatasetQueryUserEmail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `primaryContact`<sup>Required</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.primaryContact"></a>

```java
public java.lang.String getPrimaryContact();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `requestAccess`<sup>Required</sup> <a name="requestAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.requestAccess"></a>

```java
public java.lang.String getRequestAccess();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListing.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubListingBigqueryDataset <a name="BigqueryAnalyticsHubListingBigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingBigqueryDataset;

BigqueryAnalyticsHubListingBigqueryDataset.builder()
    .dataset(java.lang.String)
//  .selectedResources(IResolvable)
//  .selectedResources(java.util.List<BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.dataset">dataset</a></code> | <code>java.lang.String</code> | Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.selectedResources">selectedResources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>></code> | selected_resources block. |

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#dataset BigqueryAnalyticsHubListing#dataset}

---

##### `selectedResources`<sup>Optional</sup> <a name="selectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset.property.selectedResources"></a>

```java
public java.lang.Object getSelectedResources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>>

selected_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#selected_resources BigqueryAnalyticsHubListing#selected_resources}

---

### BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources <a name="BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources;

BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.builder()
//  .table(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.property.table">table</a></code> | <code>java.lang.String</code> | Format: For table: projects/{projectId}/datasets/{datasetId}/tables/{tableId} Example:"projects/test_project/datasets/test_dataset/tables/test_table". |

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

Format: For table: projects/{projectId}/datasets/{datasetId}/tables/{tableId} Example:"projects/test_project/datasets/test_dataset/tables/test_table".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#table BigqueryAnalyticsHubListing#table}

---

### BigqueryAnalyticsHubListingConfig <a name="BigqueryAnalyticsHubListingConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingConfig;

BigqueryAnalyticsHubListingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dataExchangeId(java.lang.String)
    .displayName(java.lang.String)
    .listingId(java.lang.String)
    .location(java.lang.String)
//  .bigqueryDataset(BigqueryAnalyticsHubListingBigqueryDataset)
//  .categories(java.util.List<java.lang.String>)
//  .dataProvider(BigqueryAnalyticsHubListingDataProvider)
//  .description(java.lang.String)
//  .documentation(java.lang.String)
//  .icon(java.lang.String)
//  .id(java.lang.String)
//  .logLinkedDatasetQueryUserEmail(java.lang.Boolean)
//  .logLinkedDatasetQueryUserEmail(IResolvable)
//  .primaryContact(java.lang.String)
//  .project(java.lang.String)
//  .publisher(BigqueryAnalyticsHubListingPublisher)
//  .pubsubTopic(BigqueryAnalyticsHubListingPubsubTopic)
//  .requestAccess(java.lang.String)
//  .restrictedExportConfig(BigqueryAnalyticsHubListingRestrictedExportConfig)
//  .timeouts(BigqueryAnalyticsHubListingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.listingId">listingId</a></code> | <code>java.lang.String</code> | The ID of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.location">location</a></code> | <code>java.lang.String</code> | The name of the location this data exchange listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.bigqueryDataset">bigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a></code> | bigquery_dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Categories of the listing. Up to two categories are allowed. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataProvider">dataProvider</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a></code> | data_provider block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.description">description</a></code> | <code>java.lang.String</code> | Short description of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.documentation">documentation</a></code> | <code>java.lang.String</code> | Documentation describing the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.icon">icon</a></code> | <code>java.lang.String</code> | Base64 encoded image representing the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#id BigqueryAnalyticsHubListing#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.logLinkedDatasetQueryUserEmail">logLinkedDatasetQueryUserEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, subscriber email logging is enabled and all queries on the linked dataset will log the email address of the querying user. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | Email or URL of the primary point of contact of the listing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#project BigqueryAnalyticsHubListing#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.publisher">publisher</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a></code> | publisher block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.pubsubTopic">pubsubTopic</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic">BigqueryAnalyticsHubListingPubsubTopic</a></code> | pubsub_topic block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.requestAccess">requestAccess</a></code> | <code>java.lang.String</code> | Email or URL of the request access of the listing. Subscribers can use this reference to request access. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.restrictedExportConfig">restrictedExportConfig</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | restricted_export_config block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataExchangeId"></a>

```java
public java.lang.String getDataExchangeId();
```

- *Type:* java.lang.String

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#data_exchange_id BigqueryAnalyticsHubListing#data_exchange_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable display name of the listing.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#display_name BigqueryAnalyticsHubListing#display_name}

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.listingId"></a>

```java
public java.lang.String getListingId();
```

- *Type:* java.lang.String

The ID of the listing.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#listing_id BigqueryAnalyticsHubListing#listing_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The name of the location this data exchange listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#location BigqueryAnalyticsHubListing#location}

---

##### `bigqueryDataset`<sup>Optional</sup> <a name="bigqueryDataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.bigqueryDataset"></a>

```java
public BigqueryAnalyticsHubListingBigqueryDataset getBigqueryDataset();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

bigquery_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#bigquery_dataset BigqueryAnalyticsHubListing#bigquery_dataset}

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

Categories of the listing. Up to two categories are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#categories BigqueryAnalyticsHubListing#categories}

---

##### `dataProvider`<sup>Optional</sup> <a name="dataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.dataProvider"></a>

```java
public BigqueryAnalyticsHubListingDataProvider getDataProvider();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

data_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#data_provider BigqueryAnalyticsHubListing#data_provider}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Short description of the listing.

The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#description BigqueryAnalyticsHubListing#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.documentation"></a>

```java
public java.lang.String getDocumentation();
```

- *Type:* java.lang.String

Documentation describing the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#documentation BigqueryAnalyticsHubListing#documentation}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.icon"></a>

```java
public java.lang.String getIcon();
```

- *Type:* java.lang.String

Base64 encoded image representing the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#icon BigqueryAnalyticsHubListing#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#id BigqueryAnalyticsHubListing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLinkedDatasetQueryUserEmail`<sup>Optional</sup> <a name="logLinkedDatasetQueryUserEmail" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.logLinkedDatasetQueryUserEmail"></a>

```java
public java.lang.Object getLogLinkedDatasetQueryUserEmail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, subscriber email logging is enabled and all queries on the linked dataset will log the email address of the querying user.

Once enabled, this setting cannot be turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#log_linked_dataset_query_user_email BigqueryAnalyticsHubListing#log_linked_dataset_query_user_email}

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.primaryContact"></a>

```java
public java.lang.String getPrimaryContact();
```

- *Type:* java.lang.String

Email or URL of the primary point of contact of the listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#project BigqueryAnalyticsHubListing#project}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.publisher"></a>

```java
public BigqueryAnalyticsHubListingPublisher getPublisher();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

publisher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#publisher BigqueryAnalyticsHubListing#publisher}

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.pubsubTopic"></a>

```java
public BigqueryAnalyticsHubListingPubsubTopic getPubsubTopic();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic">BigqueryAnalyticsHubListingPubsubTopic</a>

pubsub_topic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#pubsub_topic BigqueryAnalyticsHubListing#pubsub_topic}

---

##### `requestAccess`<sup>Optional</sup> <a name="requestAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.requestAccess"></a>

```java
public java.lang.String getRequestAccess();
```

- *Type:* java.lang.String

Email or URL of the request access of the listing. Subscribers can use this reference to request access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#request_access BigqueryAnalyticsHubListing#request_access}

---

##### `restrictedExportConfig`<sup>Optional</sup> <a name="restrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.restrictedExportConfig"></a>

```java
public BigqueryAnalyticsHubListingRestrictedExportConfig getRestrictedExportConfig();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

restricted_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#restricted_export_config BigqueryAnalyticsHubListing#restricted_export_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingConfig.property.timeouts"></a>

```java
public BigqueryAnalyticsHubListingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#timeouts BigqueryAnalyticsHubListing#timeouts}

---

### BigqueryAnalyticsHubListingDataProvider <a name="BigqueryAnalyticsHubListingDataProvider" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingDataProvider;

BigqueryAnalyticsHubListingDataProvider.builder()
    .name(java.lang.String)
//  .primaryContact(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.name">name</a></code> | <code>java.lang.String</code> | Name of the data provider. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | Email or URL of the data provider. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#name BigqueryAnalyticsHubListing#name}

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider.property.primaryContact"></a>

```java
public java.lang.String getPrimaryContact();
```

- *Type:* java.lang.String

Email or URL of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}

---

### BigqueryAnalyticsHubListingPublisher <a name="BigqueryAnalyticsHubListingPublisher" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingPublisher;

BigqueryAnalyticsHubListingPublisher.builder()
    .name(java.lang.String)
//  .primaryContact(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.name">name</a></code> | <code>java.lang.String</code> | Name of the listing publisher. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | Email or URL of the listing publisher. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the listing publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#name BigqueryAnalyticsHubListing#name}

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher.property.primaryContact"></a>

```java
public java.lang.String getPrimaryContact();
```

- *Type:* java.lang.String

Email or URL of the listing publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}

---

### BigqueryAnalyticsHubListingPubsubTopic <a name="BigqueryAnalyticsHubListingPubsubTopic" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingPubsubTopic;

BigqueryAnalyticsHubListingPubsubTopic.builder()
    .topic(java.lang.String)
//  .dataAffinityRegions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic.property.topic">topic</a></code> | <code>java.lang.String</code> | Resource name of the Pub/Sub topic source for this listing. e.g. projects/myproject/topics/topicId. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic.property.dataAffinityRegions">dataAffinityRegions</a></code> | <code>java.util.List<java.lang.String></code> | Region hint on where the data might be published. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Resource name of the Pub/Sub topic source for this listing. e.g. projects/myproject/topics/topicId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#topic BigqueryAnalyticsHubListing#topic}

---

##### `dataAffinityRegions`<sup>Optional</sup> <a name="dataAffinityRegions" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic.property.dataAffinityRegions"></a>

```java
public java.util.List<java.lang.String> getDataAffinityRegions();
```

- *Type:* java.util.List<java.lang.String>

Region hint on where the data might be published.

Data affinity regions are modifiable.
See https://cloud.google.com/about/locations for full listing of possible Cloud regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#data_affinity_regions BigqueryAnalyticsHubListing#data_affinity_regions}

---

### BigqueryAnalyticsHubListingRestrictedExportConfig <a name="BigqueryAnalyticsHubListingRestrictedExportConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingRestrictedExportConfig;

BigqueryAnalyticsHubListingRestrictedExportConfig.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .restrictQueryResult(java.lang.Boolean)
//  .restrictQueryResult(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable restricted export. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.restrictQueryResult">restrictQueryResult</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, restrict export of query result derived from restricted linked dataset table. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable restricted export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#enabled BigqueryAnalyticsHubListing#enabled}

---

##### `restrictQueryResult`<sup>Optional</sup> <a name="restrictQueryResult" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig.property.restrictQueryResult"></a>

```java
public java.lang.Object getRestrictQueryResult();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, restrict export of query result derived from restricted linked dataset table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#restrict_query_result BigqueryAnalyticsHubListing#restrict_query_result}

---

### BigqueryAnalyticsHubListingTimeouts <a name="BigqueryAnalyticsHubListingTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingTimeouts;

BigqueryAnalyticsHubListingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#create BigqueryAnalyticsHubListing#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#delete BigqueryAnalyticsHubListing#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#update BigqueryAnalyticsHubListing#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#create BigqueryAnalyticsHubListing#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#delete BigqueryAnalyticsHubListing#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_analytics_hub_listing#update BigqueryAnalyticsHubListing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubListingBigqueryDatasetOutputReference <a name="BigqueryAnalyticsHubListingBigqueryDatasetOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference;

new BigqueryAnalyticsHubListingBigqueryDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources">putSelectedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resetSelectedResources">resetSelectedResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelectedResources` <a name="putSelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources"></a>

```java
public void putSelectedResources(IResolvable OR java.util.List<BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.putSelectedResources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>>

---

##### `resetSelectedResources` <a name="resetSelectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.resetSelectedResources"></a>

```java
public void resetSelectedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResources">selectedResources</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResourcesInput">selectedResourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selectedResources`<sup>Required</sup> <a name="selectedResources" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResources"></a>

```java
public BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList getSelectedResources();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `selectedResourcesInput`<sup>Optional</sup> <a name="selectedResourcesInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.selectedResourcesInput"></a>

```java
public java.lang.Object getSelectedResourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetOutputReference.property.internalValue"></a>

```java
public BigqueryAnalyticsHubListingBigqueryDataset getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDataset">BigqueryAnalyticsHubListingBigqueryDataset</a>

---


### BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList <a name="BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList;

new BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get"></a>

```java
public BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>>

---


### BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference <a name="BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference;

new BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resetTable">resetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTable` <a name="resetTable" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.resetTable"></a>

```java
public void resetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources">BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources</a>

---


### BigqueryAnalyticsHubListingDataProviderOutputReference <a name="BigqueryAnalyticsHubListingDataProviderOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingDataProviderOutputReference;

new BigqueryAnalyticsHubListingDataProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resetPrimaryContact">resetPrimaryContact</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimaryContact` <a name="resetPrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.resetPrimaryContact"></a>

```java
public void resetPrimaryContact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContactInput">primaryContactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryContactInput`<sup>Optional</sup> <a name="primaryContactInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContactInput"></a>

```java
public java.lang.String getPrimaryContactInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryContact`<sup>Required</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.primaryContact"></a>

```java
public java.lang.String getPrimaryContact();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProviderOutputReference.property.internalValue"></a>

```java
public BigqueryAnalyticsHubListingDataProvider getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingDataProvider">BigqueryAnalyticsHubListingDataProvider</a>

---


### BigqueryAnalyticsHubListingPublisherOutputReference <a name="BigqueryAnalyticsHubListingPublisherOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingPublisherOutputReference;

new BigqueryAnalyticsHubListingPublisherOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resetPrimaryContact">resetPrimaryContact</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimaryContact` <a name="resetPrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.resetPrimaryContact"></a>

```java
public void resetPrimaryContact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContactInput">primaryContactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryContactInput`<sup>Optional</sup> <a name="primaryContactInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContactInput"></a>

```java
public java.lang.String getPrimaryContactInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryContact`<sup>Required</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.primaryContact"></a>

```java
public java.lang.String getPrimaryContact();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisherOutputReference.property.internalValue"></a>

```java
public BigqueryAnalyticsHubListingPublisher getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPublisher">BigqueryAnalyticsHubListingPublisher</a>

---


### BigqueryAnalyticsHubListingPubsubTopicOutputReference <a name="BigqueryAnalyticsHubListingPubsubTopicOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingPubsubTopicOutputReference;

new BigqueryAnalyticsHubListingPubsubTopicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.resetDataAffinityRegions">resetDataAffinityRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataAffinityRegions` <a name="resetDataAffinityRegions" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.resetDataAffinityRegions"></a>

```java
public void resetDataAffinityRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.dataAffinityRegionsInput">dataAffinityRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.dataAffinityRegions">dataAffinityRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic">BigqueryAnalyticsHubListingPubsubTopic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataAffinityRegionsInput`<sup>Optional</sup> <a name="dataAffinityRegionsInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.dataAffinityRegionsInput"></a>

```java
public java.util.List<java.lang.String> getDataAffinityRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `dataAffinityRegions`<sup>Required</sup> <a name="dataAffinityRegions" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.dataAffinityRegions"></a>

```java
public java.util.List<java.lang.String> getDataAffinityRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopicOutputReference.property.internalValue"></a>

```java
public BigqueryAnalyticsHubListingPubsubTopic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingPubsubTopic">BigqueryAnalyticsHubListingPubsubTopic</a>

---


### BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference <a name="BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference;

new BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetRestrictQueryResult">resetRestrictQueryResult</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetRestrictQueryResult` <a name="resetRestrictQueryResult" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.resetRestrictQueryResult"></a>

```java
public void resetRestrictQueryResult()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictDirectTableAccess">restrictDirectTableAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResultInput">restrictQueryResultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResult">restrictQueryResult</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `restrictDirectTableAccess`<sup>Required</sup> <a name="restrictDirectTableAccess" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictDirectTableAccess"></a>

```java
public IResolvable getRestrictDirectTableAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restrictQueryResultInput`<sup>Optional</sup> <a name="restrictQueryResultInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResultInput"></a>

```java
public java.lang.Object getRestrictQueryResultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restrictQueryResult`<sup>Required</sup> <a name="restrictQueryResult" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.restrictQueryResult"></a>

```java
public java.lang.Object getRestrictQueryResult();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference.property.internalValue"></a>

```java
public BigqueryAnalyticsHubListingRestrictedExportConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingRestrictedExportConfig">BigqueryAnalyticsHubListingRestrictedExportConfig</a>

---


### BigqueryAnalyticsHubListingTimeoutsOutputReference <a name="BigqueryAnalyticsHubListingTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_listing.BigqueryAnalyticsHubListingTimeoutsOutputReference;

new BigqueryAnalyticsHubListingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListing.BigqueryAnalyticsHubListingTimeouts">BigqueryAnalyticsHubListingTimeouts</a>

---



