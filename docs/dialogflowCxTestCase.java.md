# `google_dialogflow_cx_test_case`

Refer to the Terraform Registory for docs: [`google_dialogflow_cx_test_case`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case).

# `dialogflowCxTestCase` Submodule <a name="`dialogflowCxTestCase` Submodule" id="@cdktf/provider-google.dialogflowCxTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxTestCase <a name="DialogflowCxTestCase" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case google_dialogflow_cx_test_case}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCase;

DialogflowCxTestCase.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .notes(java.lang.String)
//  .parent(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .testCaseConversationTurns(IResolvable)
//  .testCaseConversationTurns(java.util.List<DialogflowCxTestCaseTestCaseConversationTurns>)
//  .testConfig(DialogflowCxTestCaseTestConfig)
//  .timeouts(DialogflowCxTestCaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the test case, unique within the agent. Limit of 200 characters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#id DialogflowCxTestCase#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | Additional freeform notes about the test case. Limit of 400 characters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.testCaseConversationTurns">testCaseConversationTurns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>></code> | test_case_conversation_turns block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a></code> | test_config block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the test case, unique within the agent. Limit of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#display_name DialogflowCxTestCase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#id DialogflowCxTestCase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

Additional freeform notes about the test case. Limit of 400 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#notes DialogflowCxTestCase#notes}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#parent DialogflowCxTestCase#parent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.

Each tag should start with "#" and has a limit of 30 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#tags DialogflowCxTestCase#tags}

---

##### `testCaseConversationTurns`<sup>Optional</sup> <a name="testCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.testCaseConversationTurns"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>>

test_case_conversation_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#test_case_conversation_turns DialogflowCxTestCase#test_case_conversation_turns}

---

##### `testConfig`<sup>Optional</sup> <a name="testConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.testConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#test_config DialogflowCxTestCase#test_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#timeouts DialogflowCxTestCase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestCaseConversationTurns">putTestCaseConversationTurns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestConfig">putTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestCaseConversationTurns">resetTestCaseConversationTurns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestConfig">resetTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTestCaseConversationTurns` <a name="putTestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestCaseConversationTurns"></a>

```java
public void putTestCaseConversationTurns(IResolvable OR java.util.List<DialogflowCxTestCaseTestCaseConversationTurns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestCaseConversationTurns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>>

---

##### `putTestConfig` <a name="putTestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestConfig"></a>

```java
public void putTestConfig(DialogflowCxTestCaseTestConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTimeouts"></a>

```java
public void putTimeouts(DialogflowCxTestCaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetId"></a>

```java
public void resetId()
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetParent"></a>

```java
public void resetParent()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTags"></a>

```java
public void resetTags()
```

##### `resetTestCaseConversationTurns` <a name="resetTestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestCaseConversationTurns"></a>

```java
public void resetTestCaseConversationTurns()
```

##### `resetTestConfig` <a name="resetTestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTestConfig"></a>

```java
public void resetTestConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCase;

DialogflowCxTestCase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCase;

DialogflowCxTestCase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCase;

DialogflowCxTestCase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lastTestResult">lastTestResult</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList">DialogflowCxTestCaseLastTestResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurns">testCaseConversationTurns</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList">DialogflowCxTestCaseTestCaseConversationTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference">DialogflowCxTestCaseTestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference">DialogflowCxTestCaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurnsInput">testCaseConversationTurnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfigInput">testConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `lastTestResult`<sup>Required</sup> <a name="lastTestResult" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.lastTestResult"></a>

```java
public DialogflowCxTestCaseLastTestResultList getLastTestResult();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList">DialogflowCxTestCaseLastTestResultList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `testCaseConversationTurns`<sup>Required</sup> <a name="testCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurns"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsList getTestCaseConversationTurns();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList">DialogflowCxTestCaseTestCaseConversationTurnsList</a>

---

##### `testConfig`<sup>Required</sup> <a name="testConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfig"></a>

```java
public DialogflowCxTestCaseTestConfigOutputReference getTestConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference">DialogflowCxTestCaseTestConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeouts"></a>

```java
public DialogflowCxTestCaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference">DialogflowCxTestCaseTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `testCaseConversationTurnsInput`<sup>Optional</sup> <a name="testCaseConversationTurnsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testCaseConversationTurnsInput"></a>

```java
public java.lang.Object getTestCaseConversationTurnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>>

---

##### `testConfigInput`<sup>Optional</sup> <a name="testConfigInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.testConfigInput"></a>

```java
public DialogflowCxTestCaseTestConfig getTestConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxTestCaseConfig <a name="DialogflowCxTestCaseConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseConfig;

DialogflowCxTestCaseConfig.builder()
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
//  .id(java.lang.String)
//  .notes(java.lang.String)
//  .parent(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .testCaseConversationTurns(IResolvable)
//  .testCaseConversationTurns(java.util.List<DialogflowCxTestCaseTestCaseConversationTurns>)
//  .testConfig(DialogflowCxTestCaseTestConfig)
//  .timeouts(DialogflowCxTestCaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the test case, unique within the agent. Limit of 200 characters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#id DialogflowCxTestCase#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | Additional freeform notes about the test case. Limit of 400 characters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testCaseConversationTurns">testCaseConversationTurns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>></code> | test_case_conversation_turns block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testConfig">testConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a></code> | test_config block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the test case, unique within the agent. Limit of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#display_name DialogflowCxTestCase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#id DialogflowCxTestCase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Additional freeform notes about the test case. Limit of 400 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#notes DialogflowCxTestCase#notes}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#parent DialogflowCxTestCase#parent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.

Each tag should start with "#" and has a limit of 30 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#tags DialogflowCxTestCase#tags}

---

##### `testCaseConversationTurns`<sup>Optional</sup> <a name="testCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testCaseConversationTurns"></a>

```java
public java.lang.Object getTestCaseConversationTurns();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>>

test_case_conversation_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#test_case_conversation_turns DialogflowCxTestCase#test_case_conversation_turns}

---

##### `testConfig`<sup>Optional</sup> <a name="testConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.testConfig"></a>

```java
public DialogflowCxTestCaseTestConfig getTestConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#test_config DialogflowCxTestCase#test_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseConfig.property.timeouts"></a>

```java
public DialogflowCxTestCaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#timeouts DialogflowCxTestCase#timeouts}

---

### DialogflowCxTestCaseLastTestResult <a name="DialogflowCxTestCaseLastTestResult" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResult;

DialogflowCxTestCaseLastTestResult.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurns <a name="DialogflowCxTestCaseLastTestResultConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurns;

DialogflowCxTestCaseLastTestResultConversationTurns.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInput <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput;

DialogflowCxTestCaseLastTestResultConversationTurnsUserInput.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput;

DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf;

DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent;

DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText;

DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput;

DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage;

DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences;

DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus;

DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses;

DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses.builder()
    .build();
```


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent;

DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent.builder()
    .build();
```


### DialogflowCxTestCaseTestCaseConversationTurns <a name="DialogflowCxTestCaseTestCaseConversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurns;

DialogflowCxTestCaseTestCaseConversationTurns.builder()
//  .userInput(DialogflowCxTestCaseTestCaseConversationTurnsUserInput)
//  .virtualAgentOutput(DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | user_input block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.virtualAgentOutput">virtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | virtual_agent_output block. |

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.userInput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInput getUserInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

user_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#user_input DialogflowCxTestCase#user_input}

---

##### `virtualAgentOutput`<sup>Optional</sup> <a name="virtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns.property.virtualAgentOutput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput getVirtualAgentOutput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

virtual_agent_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#virtual_agent_output DialogflowCxTestCase#virtual_agent_output}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInput <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsUserInput;

DialogflowCxTestCaseTestCaseConversationTurnsUserInput.builder()
//  .enableSentimentAnalysis(java.lang.Boolean)
//  .enableSentimentAnalysis(IResolvable)
//  .injectedParameters(java.lang.String)
//  .input(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput)
//  .isWebhookEnabled(java.lang.Boolean)
//  .isWebhookEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.enableSentimentAnalysis">enableSentimentAnalysis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether sentiment analysis is enabled. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.injectedParameters">injectedParameters</a></code> | <code>java.lang.String</code> | Parameters that need to be injected into the conversation during intent detection. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.input">input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If webhooks should be allowed to trigger in response to the user utterance. |

---

##### `enableSentimentAnalysis`<sup>Optional</sup> <a name="enableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.enableSentimentAnalysis"></a>

```java
public java.lang.Object getEnableSentimentAnalysis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether sentiment analysis is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#enable_sentiment_analysis DialogflowCxTestCase#enable_sentiment_analysis}

---

##### `injectedParameters`<sup>Optional</sup> <a name="injectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.injectedParameters"></a>

```java
public java.lang.String getInjectedParameters();
```

- *Type:* java.lang.String

Parameters that need to be injected into the conversation during intent detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#injected_parameters DialogflowCxTestCase#injected_parameters}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.input"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput getInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#input DialogflowCxTestCase#input}

---

##### `isWebhookEnabled`<sup>Optional</sup> <a name="isWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.isWebhookEnabled"></a>

```java
public java.lang.Object getIsWebhookEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If webhooks should be allowed to trigger in response to the user utterance.

Often if parameters are injected, webhooks should not be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#is_webhook_enabled DialogflowCxTestCase#is_webhook_enabled}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput;

DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.builder()
//  .dtmf(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf)
//  .event(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent)
//  .languageCode(java.lang.String)
//  .text(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | dtmf block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.event">event</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | event block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language of the input. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | text block. |

---

##### `dtmf`<sup>Optional</sup> <a name="dtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.dtmf"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf getDtmf();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

dtmf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#dtmf DialogflowCxTestCase#dtmf}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.event"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent getEvent();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#event DialogflowCxTestCase#event}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language of the input.

See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#language_code DialogflowCxTestCase#language_code}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.text"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText getText();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf;

DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.builder()
//  .digits(java.lang.String)
//  .finishDigit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.digits">digits</a></code> | <code>java.lang.String</code> | The dtmf digits. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.finishDigit">finishDigit</a></code> | <code>java.lang.String</code> | The finish digit (if any). |

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.digits"></a>

```java
public java.lang.String getDigits();
```

- *Type:* java.lang.String

The dtmf digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#digits DialogflowCxTestCase#digits}

---

##### `finishDigit`<sup>Optional</sup> <a name="finishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.finishDigit"></a>

```java
public java.lang.String getFinishDigit();
```

- *Type:* java.lang.String

The finish digit (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#finish_digit DialogflowCxTestCase#finish_digit}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent;

DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.builder()
    .event(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.property.event">event</a></code> | <code>java.lang.String</code> | Name of the event. |

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

Name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#event DialogflowCxTestCase#event}

---

### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText;

DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.builder()
    .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.property.text">text</a></code> | <code>java.lang.String</code> | The natural language text to be processed. Text length must not exceed 256 characters. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The natural language text to be processed. Text length must not exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput;

DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.builder()
//  .currentPage(DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage)
//  .sessionParameters(java.lang.String)
//  .textResponses(IResolvable)
//  .textResponses(java.util.List<DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses>)
//  .triggeredIntent(DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.currentPage">currentPage</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | current_page block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.sessionParameters">sessionParameters</a></code> | <code>java.lang.String</code> | The session parameters available to the bot at this point. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.textResponses">textResponses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>></code> | text_responses block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.triggeredIntent">triggeredIntent</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | triggered_intent block. |

---

##### `currentPage`<sup>Optional</sup> <a name="currentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.currentPage"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage getCurrentPage();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

current_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#current_page DialogflowCxTestCase#current_page}

---

##### `sessionParameters`<sup>Optional</sup> <a name="sessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.sessionParameters"></a>

```java
public java.lang.String getSessionParameters();
```

- *Type:* java.lang.String

The session parameters available to the bot at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#session_parameters DialogflowCxTestCase#session_parameters}

---

##### `textResponses`<sup>Optional</sup> <a name="textResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.textResponses"></a>

```java
public java.lang.Object getTextResponses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>>

text_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#text_responses DialogflowCxTestCase#text_responses}

---

##### `triggeredIntent`<sup>Optional</sup> <a name="triggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.triggeredIntent"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent getTriggeredIntent();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

triggered_intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#triggered_intent DialogflowCxTestCase#triggered_intent}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage;

DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.property.name">name</a></code> | <code>java.lang.String</code> | The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#name DialogflowCxTestCase#name}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses;

DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.builder()
//  .text(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.property.text">text</a></code> | <code>java.util.List<java.lang.String></code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.property.text"></a>

```java
public java.util.List<java.lang.String> getText();
```

- *Type:* java.util.List<java.lang.String>

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}

---

### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent;

DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.property.name">name</a></code> | <code>java.lang.String</code> | The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#name DialogflowCxTestCase#name}

---

### DialogflowCxTestCaseTestConfig <a name="DialogflowCxTestCaseTestConfig" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestConfig;

DialogflowCxTestCaseTestConfig.builder()
//  .flow(java.lang.String)
//  .page(java.lang.String)
//  .trackingParameters(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.flow">flow</a></code> | <code>java.lang.String</code> | Flow name to start the test case with. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.page">page</a></code> | <code>java.lang.String</code> | The page to start the test case with. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.trackingParameters">trackingParameters</a></code> | <code>java.util.List<java.lang.String></code> | Session parameters to be compared when calculating differences. |

---

##### `flow`<sup>Optional</sup> <a name="flow" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.flow"></a>

```java
public java.lang.String getFlow();
```

- *Type:* java.lang.String

Flow name to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#flow DialogflowCxTestCase#flow}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.page"></a>

```java
public java.lang.String getPage();
```

- *Type:* java.lang.String

The page to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#page DialogflowCxTestCase#page}

---

##### `trackingParameters`<sup>Optional</sup> <a name="trackingParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig.property.trackingParameters"></a>

```java
public java.util.List<java.lang.String> getTrackingParameters();
```

- *Type:* java.util.List<java.lang.String>

Session parameters to be compared when calculating differences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#tracking_parameters DialogflowCxTestCase#tracking_parameters}

---

### DialogflowCxTestCaseTimeouts <a name="DialogflowCxTestCaseTimeouts" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTimeouts;

DialogflowCxTestCaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#create DialogflowCxTestCase#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#delete DialogflowCxTestCase#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#update DialogflowCxTestCase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#create DialogflowCxTestCase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#delete DialogflowCxTestCase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dialogflow_cx_test_case#update DialogflowCxTestCase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxTestCaseLastTestResultConversationTurnsList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsList;

new DialogflowCxTestCaseLastTestResultConversationTurnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.virtualAgentOutput">virtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns">DialogflowCxTestCaseLastTestResultConversationTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Required</sup> <a name="userInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.userInput"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList getUserInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList</a>

---

##### `virtualAgentOutput`<sup>Required</sup> <a name="virtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.virtualAgentOutput"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList getVirtualAgentOutput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurns">DialogflowCxTestCaseLastTestResultConversationTurns</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.digits">digits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit">finishDigit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.digits"></a>

```java
public java.lang.String getDigits();
```

- *Type:* java.lang.String

---

##### `finishDigit`<sup>Required</sup> <a name="finishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit"></a>

```java
public java.lang.String getFinishDigit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.event">event</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.event">event</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dtmf`<sup>Required</sup> <a name="dtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.dtmf"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList getDtmf();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.event"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList getEvent();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList</a>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.text"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList getText();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis">enableSentimentAnalysis</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.injectedParameters">injectedParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableSentimentAnalysis`<sup>Required</sup> <a name="enableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis"></a>

```java
public IResolvable getEnableSentimentAnalysis();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `injectedParameters`<sup>Required</sup> <a name="injectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.injectedParameters"></a>

```java
public java.lang.String getInjectedParameters();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.input"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList getInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList">DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList</a>

---

##### `isWebhookEnabled`<sup>Required</sup> <a name="isWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.isWebhookEnabled"></a>

```java
public IResolvable getIsWebhookEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsUserInput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsUserInput">DialogflowCxTestCaseLastTestResultConversationTurnsUserInput</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.currentPage">currentPage</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.differences">differences</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters">sessionParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.textResponses">textResponses</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent">triggeredIntent</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentPage`<sup>Required</sup> <a name="currentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.currentPage"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList getCurrentPage();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList</a>

---

##### `differences`<sup>Required</sup> <a name="differences" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.differences"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList getDifferences();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList</a>

---

##### `sessionParameters`<sup>Required</sup> <a name="sessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters"></a>

```java
public java.lang.String getSessionParameters();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.status"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList</a>

---

##### `textResponses`<sup>Required</sup> <a name="textResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.textResponses"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList getTextResponses();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList</a>

---

##### `triggeredIntent`<sup>Required</sup> <a name="triggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList getTriggeredIntent();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text">text</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text"></a>

```java
public java.util.List<java.lang.String> getText();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses</a>

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference <a name="DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference;

new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---


### DialogflowCxTestCaseLastTestResultList <a name="DialogflowCxTestCaseLastTestResultList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultList;

new DialogflowCxTestCaseLastTestResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.get"></a>

```java
public DialogflowCxTestCaseLastTestResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DialogflowCxTestCaseLastTestResultOutputReference <a name="DialogflowCxTestCaseLastTestResultOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseLastTestResultOutputReference;

new DialogflowCxTestCaseLastTestResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.conversationTurns">conversationTurns</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList">DialogflowCxTestCaseLastTestResultConversationTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testResult">testResult</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testTime">testTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult">DialogflowCxTestCaseLastTestResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conversationTurns`<sup>Required</sup> <a name="conversationTurns" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.conversationTurns"></a>

```java
public DialogflowCxTestCaseLastTestResultConversationTurnsList getConversationTurns();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultConversationTurnsList">DialogflowCxTestCaseLastTestResultConversationTurnsList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `testResult`<sup>Required</sup> <a name="testResult" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testResult"></a>

```java
public java.lang.String getTestResult();
```

- *Type:* java.lang.String

---

##### `testTime`<sup>Required</sup> <a name="testTime" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.testTime"></a>

```java
public java.lang.String getTestTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResultOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseLastTestResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseLastTestResult">DialogflowCxTestCaseLastTestResult</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsList <a name="DialogflowCxTestCaseTestCaseConversationTurnsList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsList;

new DialogflowCxTestCaseTestCaseConversationTurnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.get"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>>

---


### DialogflowCxTestCaseTestCaseConversationTurnsOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference;

new DialogflowCxTestCaseTestCaseConversationTurnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput">putUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput">putVirtualAgentOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetUserInput">resetUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetVirtualAgentOutput">resetVirtualAgentOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUserInput` <a name="putUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput"></a>

```java
public void putUserInput(DialogflowCxTestCaseTestCaseConversationTurnsUserInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---

##### `putVirtualAgentOutput` <a name="putVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput"></a>

```java
public void putVirtualAgentOutput(DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---

##### `resetUserInput` <a name="resetUserInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetUserInput"></a>

```java
public void resetUserInput()
```

##### `resetVirtualAgentOutput` <a name="resetVirtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetVirtualAgentOutput"></a>

```java
public void resetVirtualAgentOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutput">virtualAgentOutput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInputInput">userInputInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutputInput">virtualAgentOutputInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Required</sup> <a name="userInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference getUserInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference</a>

---

##### `virtualAgentOutput`<sup>Required</sup> <a name="virtualAgentOutput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference getVirtualAgentOutput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference</a>

---

##### `userInputInput`<sup>Optional</sup> <a name="userInputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInputInput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInput getUserInputInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---

##### `virtualAgentOutputInput`<sup>Optional</sup> <a name="virtualAgentOutputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutputInput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput getVirtualAgentOutputInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurns">DialogflowCxTestCaseTestCaseConversationTurns</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetDigits">resetDigits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetFinishDigit">resetFinishDigit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDigits` <a name="resetDigits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetDigits"></a>

```java
public void resetDigits()
```

##### `resetFinishDigit` <a name="resetFinishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetFinishDigit"></a>

```java
public void resetFinishDigit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digitsInput">digitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigitInput">finishDigitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digits">digits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit">finishDigit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `digitsInput`<sup>Optional</sup> <a name="digitsInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digitsInput"></a>

```java
public java.lang.String getDigitsInput();
```

- *Type:* java.lang.String

---

##### `finishDigitInput`<sup>Optional</sup> <a name="finishDigitInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigitInput"></a>

```java
public java.lang.String getFinishDigitInput();
```

- *Type:* java.lang.String

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digits"></a>

```java
public java.lang.String getDigits();
```

- *Type:* java.lang.String

---

##### `finishDigit`<sup>Required</sup> <a name="finishDigit" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit"></a>

```java
public java.lang.String getFinishDigit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.eventInput">eventInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.event">event</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.eventInput"></a>

```java
public java.lang.String getEventInput();
```

- *Type:* java.lang.String

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf">putDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent">putEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetDtmf">resetDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDtmf` <a name="putDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf"></a>

```java
public void putDtmf(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---

##### `putEvent` <a name="putEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent"></a>

```java
public void putEvent(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---

##### `putText` <a name="putText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText"></a>

```java
public void putText(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---

##### `resetDtmf` <a name="resetDtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetDtmf"></a>

```java
public void resetDtmf()
```

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetEvent"></a>

```java
public void resetEvent()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.event">event</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmfInput">dtmfInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.eventInput">eventInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dtmf`<sup>Required</sup> <a name="dtmf" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmf"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference getDtmf();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.event"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference getEvent();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.text"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference getText();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference</a>

---

##### `dtmfInput`<sup>Optional</sup> <a name="dtmfInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmfInput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf getDtmfInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.eventInput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent getEventInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.textInput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText getTextInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference;

new DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetEnableSentimentAnalysis">resetEnableSentimentAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInjectedParameters">resetInjectedParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetIsWebhookEnabled">resetIsWebhookEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput"></a>

```java
public void putInput(DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---

##### `resetEnableSentimentAnalysis` <a name="resetEnableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetEnableSentimentAnalysis"></a>

```java
public void resetEnableSentimentAnalysis()
```

##### `resetInjectedParameters` <a name="resetInjectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInjectedParameters"></a>

```java
public void resetInjectedParameters()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInput"></a>

```java
public void resetInput()
```

##### `resetIsWebhookEnabled` <a name="resetIsWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetIsWebhookEnabled"></a>

```java
public void resetIsWebhookEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysisInput">enableSentimentAnalysisInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParametersInput">injectedParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.inputInput">inputInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabledInput">isWebhookEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis">enableSentimentAnalysis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParameters">injectedParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabled">isWebhookEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.input"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference getInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference</a>

---

##### `enableSentimentAnalysisInput`<sup>Optional</sup> <a name="enableSentimentAnalysisInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysisInput"></a>

```java
public java.lang.Object getEnableSentimentAnalysisInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `injectedParametersInput`<sup>Optional</sup> <a name="injectedParametersInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParametersInput"></a>

```java
public java.lang.String getInjectedParametersInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.inputInput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput getInputInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---

##### `isWebhookEnabledInput`<sup>Optional</sup> <a name="isWebhookEnabledInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabledInput"></a>

```java
public java.lang.Object getIsWebhookEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSentimentAnalysis`<sup>Required</sup> <a name="enableSentimentAnalysis" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis"></a>

```java
public java.lang.Object getEnableSentimentAnalysis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `injectedParameters`<sup>Required</sup> <a name="injectedParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParameters"></a>

```java
public java.lang.String getInjectedParameters();
```

- *Type:* java.lang.String

---

##### `isWebhookEnabled`<sup>Required</sup> <a name="isWebhookEnabled" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabled"></a>

```java
public java.lang.Object getIsWebhookEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsUserInput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsUserInput">DialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage">putCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses">putTextResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent">putTriggeredIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetCurrentPage">resetCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetSessionParameters">resetSessionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTextResponses">resetTextResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTriggeredIntent">resetTriggeredIntent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCurrentPage` <a name="putCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage"></a>

```java
public void putCurrentPage(DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---

##### `putTextResponses` <a name="putTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses"></a>

```java
public void putTextResponses(IResolvable OR java.util.List<DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>>

---

##### `putTriggeredIntent` <a name="putTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent"></a>

```java
public void putTriggeredIntent(DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---

##### `resetCurrentPage` <a name="resetCurrentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetCurrentPage"></a>

```java
public void resetCurrentPage()
```

##### `resetSessionParameters` <a name="resetSessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetSessionParameters"></a>

```java
public void resetSessionParameters()
```

##### `resetTextResponses` <a name="resetTextResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTextResponses"></a>

```java
public void resetTextResponses()
```

##### `resetTriggeredIntent` <a name="resetTriggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTriggeredIntent"></a>

```java
public void resetTriggeredIntent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPage">currentPage</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponses">textResponses</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent">triggeredIntent</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPageInput">currentPageInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParametersInput">sessionParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponsesInput">textResponsesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntentInput">triggeredIntentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters">sessionParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentPage`<sup>Required</sup> <a name="currentPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPage"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference getCurrentPage();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference</a>

---

##### `textResponses`<sup>Required</sup> <a name="textResponses" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponses"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList getTextResponses();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList</a>

---

##### `triggeredIntent`<sup>Required</sup> <a name="triggeredIntent" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference getTriggeredIntent();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference</a>

---

##### `currentPageInput`<sup>Optional</sup> <a name="currentPageInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPageInput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage getCurrentPageInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---

##### `sessionParametersInput`<sup>Optional</sup> <a name="sessionParametersInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParametersInput"></a>

```java
public java.lang.String getSessionParametersInput();
```

- *Type:* java.lang.String

---

##### `textResponsesInput`<sup>Optional</sup> <a name="textResponsesInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponsesInput"></a>

```java
public java.lang.Object getTextResponsesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>>

---

##### `triggeredIntentInput`<sup>Optional</sup> <a name="triggeredIntentInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntentInput"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent getTriggeredIntentInput();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---

##### `sessionParameters`<sup>Required</sup> <a name="sessionParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters"></a>

```java
public java.lang.String getSessionParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.textInput">textInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text">text</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.textInput"></a>

```java
public java.util.List<java.lang.String> getTextInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text"></a>

```java
public java.util.List<java.lang.String> getText();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>

---


### DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference <a name="DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference;

new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---


### DialogflowCxTestCaseTestConfigOutputReference <a name="DialogflowCxTestCaseTestConfigOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTestConfigOutputReference;

new DialogflowCxTestCaseTestConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetFlow">resetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetTrackingParameters">resetTrackingParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlow` <a name="resetFlow" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetFlow"></a>

```java
public void resetFlow()
```

##### `resetPage` <a name="resetPage" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetPage"></a>

```java
public void resetPage()
```

##### `resetTrackingParameters` <a name="resetTrackingParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.resetTrackingParameters"></a>

```java
public void resetTrackingParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flowInput">flowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.pageInput">pageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParametersInput">trackingParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flow">flow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.page">page</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParameters">trackingParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowInput`<sup>Optional</sup> <a name="flowInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flowInput"></a>

```java
public java.lang.String getFlowInput();
```

- *Type:* java.lang.String

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.pageInput"></a>

```java
public java.lang.String getPageInput();
```

- *Type:* java.lang.String

---

##### `trackingParametersInput`<sup>Optional</sup> <a name="trackingParametersInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParametersInput"></a>

```java
public java.util.List<java.lang.String> getTrackingParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `flow`<sup>Required</sup> <a name="flow" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.flow"></a>

```java
public java.lang.String getFlow();
```

- *Type:* java.lang.String

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.page"></a>

```java
public java.lang.String getPage();
```

- *Type:* java.lang.String

---

##### `trackingParameters`<sup>Required</sup> <a name="trackingParameters" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.trackingParameters"></a>

```java
public java.util.List<java.lang.String> getTrackingParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfigOutputReference.property.internalValue"></a>

```java
public DialogflowCxTestCaseTestConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTestConfig">DialogflowCxTestCaseTestConfig</a>

---


### DialogflowCxTestCaseTimeoutsOutputReference <a name="DialogflowCxTestCaseTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dialogflow_cx_test_case.DialogflowCxTestCaseTimeoutsOutputReference;

new DialogflowCxTestCaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dialogflowCxTestCase.DialogflowCxTestCaseTimeouts">DialogflowCxTestCaseTimeouts</a>

---



