# `contactCenterInsightsAnalysisRule` Submodule <a name="`contactCenterInsightsAnalysisRule` Submodule" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAnalysisRule <a name="ContactCenterInsightsAnalysisRule" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule google_contact_center_insights_analysis_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRule;

ContactCenterInsightsAnalysisRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .active(java.lang.Boolean|IResolvable)
//  .analysisPercentage(java.lang.Number)
//  .annotatorSelector(ContactCenterInsightsAnalysisRuleAnnotatorSelector)
//  .conversationFilter(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ContactCenterInsightsAnalysisRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.analysisPercentage">analysisPercentage</a></code> | <code>java.lang.Number</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.annotatorSelector">annotatorSelector</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.conversationFilter">conversationFilter</a></code> | <code>java.lang.String</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#location ContactCenterInsightsAnalysisRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#active ContactCenterInsightsAnalysisRule#active}

---

##### `analysisPercentage`<sup>Optional</sup> <a name="analysisPercentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.analysisPercentage"></a>

- *Type:* java.lang.Number

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#analysis_percentage ContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `annotatorSelector`<sup>Optional</sup> <a name="annotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.annotatorSelector"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#annotator_selector ContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `conversationFilter`<sup>Optional</sup> <a name="conversationFilter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.conversationFilter"></a>

- *Type:* java.lang.String

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#conversation_filter ContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#display_name ContactCenterInsightsAnalysisRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#timeouts ContactCenterInsightsAnalysisRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector">putAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnalysisPercentage">resetAnalysisPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnnotatorSelector">resetAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetConversationFilter">resetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnnotatorSelector` <a name="putAnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector"></a>

```java
public void putAnnotatorSelector(ContactCenterInsightsAnalysisRuleAnnotatorSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts"></a>

```java
public void putTimeouts(ContactCenterInsightsAnalysisRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetActive"></a>

```java
public void resetActive()
```

##### `resetAnalysisPercentage` <a name="resetAnalysisPercentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnalysisPercentage"></a>

```java
public void resetAnalysisPercentage()
```

##### `resetAnnotatorSelector` <a name="resetAnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnnotatorSelector"></a>

```java
public void resetAnnotatorSelector()
```

##### `resetConversationFilter` <a name="resetConversationFilter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetConversationFilter"></a>

```java
public void resetConversationFilter()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRule;

ContactCenterInsightsAnalysisRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRule;

ContactCenterInsightsAnalysisRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRule;

ContactCenterInsightsAnalysisRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRule;

ContactCenterInsightsAnalysisRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContactCenterInsightsAnalysisRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContactCenterInsightsAnalysisRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContactCenterInsightsAnalysisRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAnalysisRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelector">annotatorSelector</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference">ContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentageInput">analysisPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelectorInput">annotatorSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilterInput">conversationFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.active">active</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentage">analysisPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilter">conversationFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `annotatorSelector`<sup>Required</sup> <a name="annotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelector"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference getAnnotatorSelector();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeouts"></a>

```java
public ContactCenterInsightsAnalysisRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference">ContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.activeInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `analysisPercentageInput`<sup>Optional</sup> <a name="analysisPercentageInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentageInput"></a>

```java
public java.lang.Number getAnalysisPercentageInput();
```

- *Type:* java.lang.Number

---

##### `annotatorSelectorInput`<sup>Optional</sup> <a name="annotatorSelectorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelectorInput"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelector getAnnotatorSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `conversationFilterInput`<sup>Optional</sup> <a name="conversationFilterInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilterInput"></a>

```java
public java.lang.String getConversationFilterInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeoutsInput"></a>

```java
public IResolvable|ContactCenterInsightsAnalysisRuleTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `analysisPercentage`<sup>Required</sup> <a name="analysisPercentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentage"></a>

```java
public java.lang.Number getAnalysisPercentage();
```

- *Type:* java.lang.Number

---

##### `conversationFilter`<sup>Required</sup> <a name="conversationFilter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilter"></a>

```java
public java.lang.String getConversationFilter();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAnalysisRuleAnnotatorSelector <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleAnnotatorSelector;

ContactCenterInsightsAnalysisRuleAnnotatorSelector.builder()
//  .issueModels(java.util.List<java.lang.String>)
//  .phraseMatchers(java.util.List<java.lang.String>)
//  .qaConfig(ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig)
//  .runEntityAnnotator(java.lang.Boolean|IResolvable)
//  .runIntentAnnotator(java.lang.Boolean|IResolvable)
//  .runInterruptionAnnotator(java.lang.Boolean|IResolvable)
//  .runIssueModelAnnotator(java.lang.Boolean|IResolvable)
//  .runPhraseMatcherAnnotator(java.lang.Boolean|IResolvable)
//  .runQaAnnotator(java.lang.Boolean|IResolvable)
//  .runSentimentAnnotator(java.lang.Boolean|IResolvable)
//  .runSilenceAnnotator(java.lang.Boolean|IResolvable)
//  .runSummarizationAnnotator(java.lang.Boolean|IResolvable)
//  .summarizationConfig(ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels">issueModels</a></code> | <code>java.util.List<java.lang.String></code> | The issue model to run. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers">phraseMatchers</a></code> | <code>java.util.List<java.lang.String></code> | The list of phrase matchers to run. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig">qaConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | qa_config block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator">runEntityAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to run the entity annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator">runIntentAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to run the intent annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator">runInterruptionAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to run the interruption annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator">runIssueModelAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to run the issue model annotator. A model should have already been deployed for this to take effect. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator">runPhraseMatcherAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to run the active phrase matcher annotator(s). |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator">runQaAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to run the QA annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator">runSentimentAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to run the sentiment annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator">runSilenceAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to run the silence annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator">runSummarizationAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to run the summarization annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig">summarizationConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | summarization_config block. |

---

##### `issueModels`<sup>Optional</sup> <a name="issueModels" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels"></a>

```java
public java.util.List<java.lang.String> getIssueModels();
```

- *Type:* java.util.List<java.lang.String>

The issue model to run.

If not provided, the most recently deployed topic
model will be used. The provided issue model will only be used for
inference if the issue model is deployed and if run_issue_model_annotator
is set to true. If more than one issue model is provided, only the first
provided issue model will be used for inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#issue_models ContactCenterInsightsAnalysisRule#issue_models}

---

##### `phraseMatchers`<sup>Optional</sup> <a name="phraseMatchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers"></a>

```java
public java.util.List<java.lang.String> getPhraseMatchers();
```

- *Type:* java.util.List<java.lang.String>

The list of phrase matchers to run.

If not provided, all active phrase
matchers will be used. If inactive phrase matchers are provided, they will
not be used. Phrase matchers will be run only if
run_phrase_matcher_annotator is set to true. Format:
projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#phrase_matchers ContactCenterInsightsAnalysisRule#phrase_matchers}

---

##### `qaConfig`<sup>Optional</sup> <a name="qaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig getQaConfig();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

qa_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#qa_config ContactCenterInsightsAnalysisRule#qa_config}

---

##### `runEntityAnnotator`<sup>Optional</sup> <a name="runEntityAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunEntityAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to run the entity annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#run_entity_annotator ContactCenterInsightsAnalysisRule#run_entity_annotator}

---

##### `runIntentAnnotator`<sup>Optional</sup> <a name="runIntentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunIntentAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to run the intent annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#run_intent_annotator ContactCenterInsightsAnalysisRule#run_intent_annotator}

---

##### `runInterruptionAnnotator`<sup>Optional</sup> <a name="runInterruptionAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunInterruptionAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to run the interruption annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#run_interruption_annotator ContactCenterInsightsAnalysisRule#run_interruption_annotator}

---

##### `runIssueModelAnnotator`<sup>Optional</sup> <a name="runIssueModelAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunIssueModelAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to run the issue model annotator. A model should have already been deployed for this to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#run_issue_model_annotator ContactCenterInsightsAnalysisRule#run_issue_model_annotator}

---

##### `runPhraseMatcherAnnotator`<sup>Optional</sup> <a name="runPhraseMatcherAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunPhraseMatcherAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to run the active phrase matcher annotator(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#run_phrase_matcher_annotator ContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}

---

##### `runQaAnnotator`<sup>Optional</sup> <a name="runQaAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunQaAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to run the QA annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#run_qa_annotator ContactCenterInsightsAnalysisRule#run_qa_annotator}

---

##### `runSentimentAnnotator`<sup>Optional</sup> <a name="runSentimentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunSentimentAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to run the sentiment annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#run_sentiment_annotator ContactCenterInsightsAnalysisRule#run_sentiment_annotator}

---

##### `runSilenceAnnotator`<sup>Optional</sup> <a name="runSilenceAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunSilenceAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to run the silence annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#run_silence_annotator ContactCenterInsightsAnalysisRule#run_silence_annotator}

---

##### `runSummarizationAnnotator`<sup>Optional</sup> <a name="runSummarizationAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunSummarizationAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to run the summarization annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#run_summarization_annotator ContactCenterInsightsAnalysisRule#run_summarization_annotator}

---

##### `summarizationConfig`<sup>Optional</sup> <a name="summarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig getSummarizationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#summarization_config ContactCenterInsightsAnalysisRule#summarization_config}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig;

ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.builder()
//  .scorecardList(ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList">scorecardList</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | scorecard_list block. |

---

##### `scorecardList`<sup>Optional</sup> <a name="scorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct getScorecardList();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

scorecard_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#scorecard_list ContactCenterInsightsAnalysisRule#scorecard_list}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct;

ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.builder()
//  .qaScorecardRevisions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions">qaScorecardRevisions</a></code> | <code>java.util.List<java.lang.String></code> | List of QaScorecardRevisions. |

---

##### `qaScorecardRevisions`<sup>Optional</sup> <a name="qaScorecardRevisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions"></a>

```java
public java.util.List<java.lang.String> getQaScorecardRevisions();
```

- *Type:* java.util.List<java.lang.String>

List of QaScorecardRevisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#qa_scorecard_revisions ContactCenterInsightsAnalysisRule#qa_scorecard_revisions}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig;

ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.builder()
//  .conversationProfile(java.lang.String)
//  .summarizationModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile">conversationProfile</a></code> | <code>java.lang.String</code> | Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel">summarizationModel</a></code> | <code>java.lang.String</code> | Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"]. |

---

##### `conversationProfile`<sup>Optional</sup> <a name="conversationProfile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile"></a>

```java
public java.lang.String getConversationProfile();
```

- *Type:* java.lang.String

Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#conversation_profile ContactCenterInsightsAnalysisRule#conversation_profile}

---

##### `summarizationModel`<sup>Optional</sup> <a name="summarizationModel" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel"></a>

```java
public java.lang.String getSummarizationModel();
```

- *Type:* java.lang.String

Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#summarization_model ContactCenterInsightsAnalysisRule#summarization_model}

---

### ContactCenterInsightsAnalysisRuleConfig <a name="ContactCenterInsightsAnalysisRuleConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleConfig;

ContactCenterInsightsAnalysisRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .active(java.lang.Boolean|IResolvable)
//  .analysisPercentage(java.lang.Number)
//  .annotatorSelector(ContactCenterInsightsAnalysisRuleAnnotatorSelector)
//  .conversationFilter(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ContactCenterInsightsAnalysisRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.active">active</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage">analysisPercentage</a></code> | <code>java.lang.Number</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector">annotatorSelector</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.conversationFilter">conversationFilter</a></code> | <code>java.lang.String</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#location ContactCenterInsightsAnalysisRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#active ContactCenterInsightsAnalysisRule#active}

---

##### `analysisPercentage`<sup>Optional</sup> <a name="analysisPercentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage"></a>

```java
public java.lang.Number getAnalysisPercentage();
```

- *Type:* java.lang.Number

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#analysis_percentage ContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `annotatorSelector`<sup>Optional</sup> <a name="annotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelector getAnnotatorSelector();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#annotator_selector ContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `conversationFilter`<sup>Optional</sup> <a name="conversationFilter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.conversationFilter"></a>

```java
public java.lang.String getConversationFilter();
```

- *Type:* java.lang.String

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#conversation_filter ContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#display_name ContactCenterInsightsAnalysisRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.timeouts"></a>

```java
public ContactCenterInsightsAnalysisRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#timeouts ContactCenterInsightsAnalysisRule#timeouts}

---

### ContactCenterInsightsAnalysisRuleTimeouts <a name="ContactCenterInsightsAnalysisRuleTimeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleTimeouts;

ContactCenterInsightsAnalysisRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#create ContactCenterInsightsAnalysisRule#create}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#delete ContactCenterInsightsAnalysisRule#delete}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#update ContactCenterInsightsAnalysisRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#create ContactCenterInsightsAnalysisRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#delete ContactCenterInsightsAnalysisRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/contact_center_insights_analysis_rule#update ContactCenterInsightsAnalysisRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig">putQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig">putSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels">resetIssueModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers">resetPhraseMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig">resetQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator">resetRunEntityAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator">resetRunIntentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator">resetRunInterruptionAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator">resetRunIssueModelAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator">resetRunPhraseMatcherAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator">resetRunQaAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator">resetRunSentimentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator">resetRunSilenceAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator">resetRunSummarizationAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig">resetSummarizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQaConfig` <a name="putQaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig"></a>

```java
public void putQaConfig(ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `putSummarizationConfig` <a name="putSummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig"></a>

```java
public void putSummarizationConfig(ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `resetIssueModels` <a name="resetIssueModels" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels"></a>

```java
public void resetIssueModels()
```

##### `resetPhraseMatchers` <a name="resetPhraseMatchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers"></a>

```java
public void resetPhraseMatchers()
```

##### `resetQaConfig` <a name="resetQaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig"></a>

```java
public void resetQaConfig()
```

##### `resetRunEntityAnnotator` <a name="resetRunEntityAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator"></a>

```java
public void resetRunEntityAnnotator()
```

##### `resetRunIntentAnnotator` <a name="resetRunIntentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator"></a>

```java
public void resetRunIntentAnnotator()
```

##### `resetRunInterruptionAnnotator` <a name="resetRunInterruptionAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator"></a>

```java
public void resetRunInterruptionAnnotator()
```

##### `resetRunIssueModelAnnotator` <a name="resetRunIssueModelAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator"></a>

```java
public void resetRunIssueModelAnnotator()
```

##### `resetRunPhraseMatcherAnnotator` <a name="resetRunPhraseMatcherAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator"></a>

```java
public void resetRunPhraseMatcherAnnotator()
```

##### `resetRunQaAnnotator` <a name="resetRunQaAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator"></a>

```java
public void resetRunQaAnnotator()
```

##### `resetRunSentimentAnnotator` <a name="resetRunSentimentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator"></a>

```java
public void resetRunSentimentAnnotator()
```

##### `resetRunSilenceAnnotator` <a name="resetRunSilenceAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator"></a>

```java
public void resetRunSilenceAnnotator()
```

##### `resetRunSummarizationAnnotator` <a name="resetRunSummarizationAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator"></a>

```java
public void resetRunSummarizationAnnotator()
```

##### `resetSummarizationConfig` <a name="resetSummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig"></a>

```java
public void resetSummarizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig">qaConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig">summarizationConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput">issueModelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput">phraseMatchersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput">qaConfigInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput">runEntityAnnotatorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput">runIntentAnnotatorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput">runInterruptionAnnotatorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput">runIssueModelAnnotatorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput">runPhraseMatcherAnnotatorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput">runQaAnnotatorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput">runSentimentAnnotatorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput">runSilenceAnnotatorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput">runSummarizationAnnotatorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput">summarizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels">issueModels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers">phraseMatchers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator">runEntityAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator">runIntentAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator">runInterruptionAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator">runIssueModelAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator">runPhraseMatcherAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator">runQaAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator">runSentimentAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator">runSilenceAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator">runSummarizationAnnotator</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `qaConfig`<sup>Required</sup> <a name="qaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference getQaConfig();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a>

---

##### `summarizationConfig`<sup>Required</sup> <a name="summarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference getSummarizationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a>

---

##### `issueModelsInput`<sup>Optional</sup> <a name="issueModelsInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput"></a>

```java
public java.util.List<java.lang.String> getIssueModelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phraseMatchersInput`<sup>Optional</sup> <a name="phraseMatchersInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput"></a>

```java
public java.util.List<java.lang.String> getPhraseMatchersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `qaConfigInput`<sup>Optional</sup> <a name="qaConfigInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig getQaConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `runEntityAnnotatorInput`<sup>Optional</sup> <a name="runEntityAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput"></a>

```java
public java.lang.Boolean|IResolvable getRunEntityAnnotatorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runIntentAnnotatorInput`<sup>Optional</sup> <a name="runIntentAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput"></a>

```java
public java.lang.Boolean|IResolvable getRunIntentAnnotatorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runInterruptionAnnotatorInput`<sup>Optional</sup> <a name="runInterruptionAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput"></a>

```java
public java.lang.Boolean|IResolvable getRunInterruptionAnnotatorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runIssueModelAnnotatorInput`<sup>Optional</sup> <a name="runIssueModelAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput"></a>

```java
public java.lang.Boolean|IResolvable getRunIssueModelAnnotatorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runPhraseMatcherAnnotatorInput`<sup>Optional</sup> <a name="runPhraseMatcherAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput"></a>

```java
public java.lang.Boolean|IResolvable getRunPhraseMatcherAnnotatorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runQaAnnotatorInput`<sup>Optional</sup> <a name="runQaAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput"></a>

```java
public java.lang.Boolean|IResolvable getRunQaAnnotatorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runSentimentAnnotatorInput`<sup>Optional</sup> <a name="runSentimentAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput"></a>

```java
public java.lang.Boolean|IResolvable getRunSentimentAnnotatorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runSilenceAnnotatorInput`<sup>Optional</sup> <a name="runSilenceAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput"></a>

```java
public java.lang.Boolean|IResolvable getRunSilenceAnnotatorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runSummarizationAnnotatorInput`<sup>Optional</sup> <a name="runSummarizationAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput"></a>

```java
public java.lang.Boolean|IResolvable getRunSummarizationAnnotatorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `summarizationConfigInput`<sup>Optional</sup> <a name="summarizationConfigInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig getSummarizationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `issueModels`<sup>Required</sup> <a name="issueModels" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels"></a>

```java
public java.util.List<java.lang.String> getIssueModels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phraseMatchers`<sup>Required</sup> <a name="phraseMatchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers"></a>

```java
public java.util.List<java.lang.String> getPhraseMatchers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runEntityAnnotator`<sup>Required</sup> <a name="runEntityAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunEntityAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runIntentAnnotator`<sup>Required</sup> <a name="runIntentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunIntentAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runInterruptionAnnotator`<sup>Required</sup> <a name="runInterruptionAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunInterruptionAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runIssueModelAnnotator`<sup>Required</sup> <a name="runIssueModelAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunIssueModelAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runPhraseMatcherAnnotator`<sup>Required</sup> <a name="runPhraseMatcherAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunPhraseMatcherAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runQaAnnotator`<sup>Required</sup> <a name="runQaAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunQaAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runSentimentAnnotator`<sup>Required</sup> <a name="runSentimentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunSentimentAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runSilenceAnnotator`<sup>Required</sup> <a name="runSilenceAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunSilenceAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `runSummarizationAnnotator`<sup>Required</sup> <a name="runSummarizationAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator"></a>

```java
public java.lang.Boolean|IResolvable getRunSummarizationAnnotator();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList">putScorecardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList">resetScorecardList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScorecardList` <a name="putScorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList"></a>

```java
public void putScorecardList(ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `resetScorecardList` <a name="resetScorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList"></a>

```java
public void resetScorecardList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList">scorecardList</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput">scorecardListInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scorecardList`<sup>Required</sup> <a name="scorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference getScorecardList();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a>

---

##### `scorecardListInput`<sup>Optional</sup> <a name="scorecardListInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct getScorecardListInput();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions">resetQaScorecardRevisions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQaScorecardRevisions` <a name="resetQaScorecardRevisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions"></a>

```java
public void resetQaScorecardRevisions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput">qaScorecardRevisionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions">qaScorecardRevisions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `qaScorecardRevisionsInput`<sup>Optional</sup> <a name="qaScorecardRevisionsInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput"></a>

```java
public java.util.List<java.lang.String> getQaScorecardRevisionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `qaScorecardRevisions`<sup>Required</sup> <a name="qaScorecardRevisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions"></a>

```java
public java.util.List<java.lang.String> getQaScorecardRevisions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile">resetConversationProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel">resetSummarizationModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConversationProfile` <a name="resetConversationProfile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile"></a>

```java
public void resetConversationProfile()
```

##### `resetSummarizationModel` <a name="resetSummarizationModel" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel"></a>

```java
public void resetSummarizationModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput">conversationProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput">summarizationModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile">conversationProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel">summarizationModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conversationProfileInput`<sup>Optional</sup> <a name="conversationProfileInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput"></a>

```java
public java.lang.String getConversationProfileInput();
```

- *Type:* java.lang.String

---

##### `summarizationModelInput`<sup>Optional</sup> <a name="summarizationModelInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput"></a>

```java
public java.lang.String getSummarizationModelInput();
```

- *Type:* java.lang.String

---

##### `conversationProfile`<sup>Required</sup> <a name="conversationProfile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile"></a>

```java
public java.lang.String getConversationProfile();
```

- *Type:* java.lang.String

---

##### `summarizationModel`<sup>Required</sup> <a name="summarizationModel" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel"></a>

```java
public java.lang.String getSummarizationModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue"></a>

```java
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---


### ContactCenterInsightsAnalysisRuleTimeoutsOutputReference <a name="ContactCenterInsightsAnalysisRuleTimeoutsOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.contact_center_insights_analysis_rule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference;

new ContactCenterInsightsAnalysisRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ContactCenterInsightsAnalysisRuleTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

---



