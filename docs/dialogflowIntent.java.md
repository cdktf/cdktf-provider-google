# `google_dialogflow_intent`

Refer to the Terraform Registory for docs: [`google_dialogflow_intent`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent).

# `dialogflowIntent` Submodule <a name="`dialogflowIntent` Submodule" id="@cdktf/provider-google.dialogflowIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowIntent <a name="DialogflowIntent" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent google_dialogflow_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_intent.DialogflowIntent;

DialogflowIntent.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
//  .action(java.lang.String)
//  .defaultResponsePlatforms(java.util.List<java.lang.String>)
//  .events(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputContextNames(java.util.List<java.lang.String>)
//  .isFallback(java.lang.Boolean)
//  .isFallback(IResolvable)
//  .mlDisabled(java.lang.Boolean)
//  .mlDisabled(IResolvable)
//  .parentFollowupIntentName(java.lang.String)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .resetContexts(java.lang.Boolean)
//  .resetContexts(IResolvable)
//  .timeouts(DialogflowIntentTimeouts)
//  .webhookState(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of this intent to be displayed on the console. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The name of the action associated with the intent. Note: The action name must not contain whitespaces. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.defaultResponsePlatforms">defaultResponsePlatforms</a></code> | <code>java.util.List<java.lang.String></code> | The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"]. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.events">events</a></code> | <code>java.util.List<java.lang.String></code> | The collection of event names that trigger the intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#id DialogflowIntent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.inputContextNames">inputContextNames</a></code> | <code>java.util.List<java.lang.String></code> | The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.isFallback">isFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.mlDisabled">mlDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether Machine Learning is disabled for the intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>java.lang.String</code> | The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#project DialogflowIntent#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.resetContexts">resetContexts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether to delete all contexts in the current session when this intent is matched. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.webhookState">webhookState</a></code> | <code>java.lang.String</code> | Indicates whether webhooks are enabled for the intent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The name of this intent to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#display_name DialogflowIntent#display_name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The name of the action associated with the intent. Note: The action name must not contain whitespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#action DialogflowIntent#action}

---

##### `defaultResponsePlatforms`<sup>Optional</sup> <a name="defaultResponsePlatforms" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.defaultResponsePlatforms"></a>

- *Type:* java.util.List<java.lang.String>

The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#default_response_platforms DialogflowIntent#default_response_platforms}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.events"></a>

- *Type:* java.util.List<java.lang.String>

The collection of event names that trigger the intent.

If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#events DialogflowIntent#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#id DialogflowIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputContextNames`<sup>Optional</sup> <a name="inputContextNames" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.inputContextNames"></a>

- *Type:* java.util.List<java.lang.String>

The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#input_context_names DialogflowIntent#input_context_names}

---

##### `isFallback`<sup>Optional</sup> <a name="isFallback" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.isFallback"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether this is a fallback intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#is_fallback DialogflowIntent#is_fallback}

---

##### `mlDisabled`<sup>Optional</sup> <a name="mlDisabled" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.mlDisabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether Machine Learning is disabled for the intent.

Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#ml_disabled DialogflowIntent#ml_disabled}

---

##### `parentFollowupIntentName`<sup>Optional</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.parentFollowupIntentName"></a>

- *Type:* java.lang.String

The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#parent_followup_intent_name DialogflowIntent#parent_followup_intent_name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

The priority of this intent.

Higher numbers represent higher priorities.

* If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
* If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#priority DialogflowIntent#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#project DialogflowIntent#project}.

---

##### `resetContexts`<sup>Optional</sup> <a name="resetContexts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.resetContexts"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether to delete all contexts in the current session when this intent is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#reset_contexts DialogflowIntent#reset_contexts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#timeouts DialogflowIntent#timeouts}

---

##### `webhookState`<sup>Optional</sup> <a name="webhookState" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.webhookState"></a>

- *Type:* java.lang.String

Indicates whether webhooks are enabled for the intent.

WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#webhook_state DialogflowIntent#webhook_state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetDefaultResponsePlatforms">resetDefaultResponsePlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetEvents">resetEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetInputContextNames">resetInputContextNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetIsFallback">resetIsFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetMlDisabled">resetMlDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetParentFollowupIntentName">resetParentFollowupIntentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetResetContexts">resetResetContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetWebhookState">resetWebhookState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts"></a>

```java
public void putTimeouts(DialogflowIntentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetAction"></a>

```java
public void resetAction()
```

##### `resetDefaultResponsePlatforms` <a name="resetDefaultResponsePlatforms" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetDefaultResponsePlatforms"></a>

```java
public void resetDefaultResponsePlatforms()
```

##### `resetEvents` <a name="resetEvents" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetEvents"></a>

```java
public void resetEvents()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetId"></a>

```java
public void resetId()
```

##### `resetInputContextNames` <a name="resetInputContextNames" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetInputContextNames"></a>

```java
public void resetInputContextNames()
```

##### `resetIsFallback` <a name="resetIsFallback" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetIsFallback"></a>

```java
public void resetIsFallback()
```

##### `resetMlDisabled` <a name="resetMlDisabled" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetMlDisabled"></a>

```java
public void resetMlDisabled()
```

##### `resetParentFollowupIntentName` <a name="resetParentFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetParentFollowupIntentName"></a>

```java
public void resetParentFollowupIntentName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetProject"></a>

```java
public void resetProject()
```

##### `resetResetContexts` <a name="resetResetContexts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetResetContexts"></a>

```java
public void resetResetContexts()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWebhookState` <a name="resetWebhookState" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetWebhookState"></a>

```java
public void resetWebhookState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_intent.DialogflowIntent;

DialogflowIntent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_intent.DialogflowIntent;

DialogflowIntent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_intent.DialogflowIntent;

DialogflowIntent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.followupIntentInfo">followupIntentInfo</a></code> | <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList">DialogflowIntentFollowupIntentInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.rootFollowupIntentName">rootFollowupIntentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference">DialogflowIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatformsInput">defaultResponsePlatformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNamesInput">inputContextNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.isFallbackInput">isFallbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabledInput">mlDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentNameInput">parentFollowupIntentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.resetContextsInput">resetContextsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.webhookStateInput">webhookStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatforms">defaultResponsePlatforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNames">inputContextNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.isFallback">isFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabled">mlDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.resetContexts">resetContexts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.webhookState">webhookState</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `followupIntentInfo`<sup>Required</sup> <a name="followupIntentInfo" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.followupIntentInfo"></a>

```java
public DialogflowIntentFollowupIntentInfoList getFollowupIntentInfo();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList">DialogflowIntentFollowupIntentInfoList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rootFollowupIntentName`<sup>Required</sup> <a name="rootFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.rootFollowupIntentName"></a>

```java
public java.lang.String getRootFollowupIntentName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.timeouts"></a>

```java
public DialogflowIntentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference">DialogflowIntentTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `defaultResponsePlatformsInput`<sup>Optional</sup> <a name="defaultResponsePlatformsInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatformsInput"></a>

```java
public java.util.List<java.lang.String> getDefaultResponsePlatformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputContextNamesInput`<sup>Optional</sup> <a name="inputContextNamesInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNamesInput"></a>

```java
public java.util.List<java.lang.String> getInputContextNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isFallbackInput`<sup>Optional</sup> <a name="isFallbackInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.isFallbackInput"></a>

```java
public java.lang.Object getIsFallbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mlDisabledInput`<sup>Optional</sup> <a name="mlDisabledInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabledInput"></a>

```java
public java.lang.Object getMlDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parentFollowupIntentNameInput`<sup>Optional</sup> <a name="parentFollowupIntentNameInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentNameInput"></a>

```java
public java.lang.String getParentFollowupIntentNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `resetContextsInput`<sup>Optional</sup> <a name="resetContextsInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.resetContextsInput"></a>

```java
public java.lang.Object getResetContextsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

---

##### `webhookStateInput`<sup>Optional</sup> <a name="webhookStateInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.webhookStateInput"></a>

```java
public java.lang.String getWebhookStateInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `defaultResponsePlatforms`<sup>Required</sup> <a name="defaultResponsePlatforms" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatforms"></a>

```java
public java.util.List<java.lang.String> getDefaultResponsePlatforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputContextNames`<sup>Required</sup> <a name="inputContextNames" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNames"></a>

```java
public java.util.List<java.lang.String> getInputContextNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isFallback`<sup>Required</sup> <a name="isFallback" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.isFallback"></a>

```java
public java.lang.Object getIsFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mlDisabled`<sup>Required</sup> <a name="mlDisabled" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabled"></a>

```java
public java.lang.Object getMlDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parentFollowupIntentName`<sup>Required</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentName"></a>

```java
public java.lang.String getParentFollowupIntentName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `resetContexts`<sup>Required</sup> <a name="resetContexts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.resetContexts"></a>

```java
public java.lang.Object getResetContexts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `webhookState`<sup>Required</sup> <a name="webhookState" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.webhookState"></a>

```java
public java.lang.String getWebhookState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowIntentConfig <a name="DialogflowIntentConfig" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_intent.DialogflowIntentConfig;

DialogflowIntentConfig.builder()
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
    .displayName(java.lang.String)
//  .action(java.lang.String)
//  .defaultResponsePlatforms(java.util.List<java.lang.String>)
//  .events(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputContextNames(java.util.List<java.lang.String>)
//  .isFallback(java.lang.Boolean)
//  .isFallback(IResolvable)
//  .mlDisabled(java.lang.Boolean)
//  .mlDisabled(IResolvable)
//  .parentFollowupIntentName(java.lang.String)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .resetContexts(java.lang.Boolean)
//  .resetContexts(IResolvable)
//  .timeouts(DialogflowIntentTimeouts)
//  .webhookState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of this intent to be displayed on the console. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.action">action</a></code> | <code>java.lang.String</code> | The name of the action associated with the intent. Note: The action name must not contain whitespaces. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.defaultResponsePlatforms">defaultResponsePlatforms</a></code> | <code>java.util.List<java.lang.String></code> | The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"]. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | The collection of event names that trigger the intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#id DialogflowIntent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.inputContextNames">inputContextNames</a></code> | <code>java.util.List<java.lang.String></code> | The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.isFallback">isFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.mlDisabled">mlDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether Machine Learning is disabled for the intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>java.lang.String</code> | The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#project DialogflowIntent#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.resetContexts">resetContexts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether to delete all contexts in the current session when this intent is matched. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.webhookState">webhookState</a></code> | <code>java.lang.String</code> | Indicates whether webhooks are enabled for the intent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of this intent to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#display_name DialogflowIntent#display_name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The name of the action associated with the intent. Note: The action name must not contain whitespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#action DialogflowIntent#action}

---

##### `defaultResponsePlatforms`<sup>Optional</sup> <a name="defaultResponsePlatforms" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.defaultResponsePlatforms"></a>

```java
public java.util.List<java.lang.String> getDefaultResponsePlatforms();
```

- *Type:* java.util.List<java.lang.String>

The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#default_response_platforms DialogflowIntent#default_response_platforms}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

The collection of event names that trigger the intent.

If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#events DialogflowIntent#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#id DialogflowIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputContextNames`<sup>Optional</sup> <a name="inputContextNames" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.inputContextNames"></a>

```java
public java.util.List<java.lang.String> getInputContextNames();
```

- *Type:* java.util.List<java.lang.String>

The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#input_context_names DialogflowIntent#input_context_names}

---

##### `isFallback`<sup>Optional</sup> <a name="isFallback" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.isFallback"></a>

```java
public java.lang.Object getIsFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether this is a fallback intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#is_fallback DialogflowIntent#is_fallback}

---

##### `mlDisabled`<sup>Optional</sup> <a name="mlDisabled" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.mlDisabled"></a>

```java
public java.lang.Object getMlDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether Machine Learning is disabled for the intent.

Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#ml_disabled DialogflowIntent#ml_disabled}

---

##### `parentFollowupIntentName`<sup>Optional</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.parentFollowupIntentName"></a>

```java
public java.lang.String getParentFollowupIntentName();
```

- *Type:* java.lang.String

The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#parent_followup_intent_name DialogflowIntent#parent_followup_intent_name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of this intent.

Higher numbers represent higher priorities.

* If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
* If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#priority DialogflowIntent#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#project DialogflowIntent#project}.

---

##### `resetContexts`<sup>Optional</sup> <a name="resetContexts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.resetContexts"></a>

```java
public java.lang.Object getResetContexts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether to delete all contexts in the current session when this intent is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#reset_contexts DialogflowIntent#reset_contexts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.timeouts"></a>

```java
public DialogflowIntentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#timeouts DialogflowIntent#timeouts}

---

##### `webhookState`<sup>Optional</sup> <a name="webhookState" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.webhookState"></a>

```java
public java.lang.String getWebhookState();
```

- *Type:* java.lang.String

Indicates whether webhooks are enabled for the intent.

WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#webhook_state DialogflowIntent#webhook_state}

---

### DialogflowIntentFollowupIntentInfo <a name="DialogflowIntentFollowupIntentInfo" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_intent.DialogflowIntentFollowupIntentInfo;

DialogflowIntentFollowupIntentInfo.builder()
    .build();
```


### DialogflowIntentTimeouts <a name="DialogflowIntentTimeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_intent.DialogflowIntentTimeouts;

DialogflowIntentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#create DialogflowIntent#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#delete DialogflowIntent#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#update DialogflowIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#create DialogflowIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#delete DialogflowIntent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/dialogflow_intent#update DialogflowIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowIntentFollowupIntentInfoList <a name="DialogflowIntentFollowupIntentInfoList" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_intent.DialogflowIntentFollowupIntentInfoList;

new DialogflowIntentFollowupIntentInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get"></a>

```java
public DialogflowIntentFollowupIntentInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowIntentFollowupIntentInfoOutputReference <a name="DialogflowIntentFollowupIntentInfoOutputReference" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_intent.DialogflowIntentFollowupIntentInfoOutputReference;

new DialogflowIntentFollowupIntentInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName">followupIntentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo">DialogflowIntentFollowupIntentInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `followupIntentName`<sup>Required</sup> <a name="followupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName"></a>

```java
public java.lang.String getFollowupIntentName();
```

- *Type:* java.lang.String

---

##### `parentFollowupIntentName`<sup>Required</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName"></a>

```java
public java.lang.String getParentFollowupIntentName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.internalValue"></a>

```java
public DialogflowIntentFollowupIntentInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo">DialogflowIntentFollowupIntentInfo</a>

---


### DialogflowIntentTimeoutsOutputReference <a name="DialogflowIntentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_intent.DialogflowIntentTimeoutsOutputReference;

new DialogflowIntentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

---



