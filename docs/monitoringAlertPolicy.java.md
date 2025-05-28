# `monitoringAlertPolicy` Submodule <a name="`monitoringAlertPolicy` Submodule" id="@cdktf/provider-google.monitoringAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlertPolicy <a name="MonitoringAlertPolicy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy google_monitoring_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicy;

MonitoringAlertPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .combiner(java.lang.String)
    .conditions(IResolvable)
    .conditions(java.util.List<MonitoringAlertPolicyConditions>)
    .displayName(java.lang.String)
//  .alertStrategy(MonitoringAlertPolicyAlertStrategy)
//  .documentation(MonitoringAlertPolicyDocumentation)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .notificationChannels(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .severity(java.lang.String)
//  .timeouts(MonitoringAlertPolicyTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.combiner">combiner</a></code> | <code>java.lang.String</code> | How to combine the results of multiple conditions to determine if an incident should be opened. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A short name or phrase used to identify the policy in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.alertStrategy">alertStrategy</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a></code> | alert_strategy block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the policy is enabled. The default is true. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#id MonitoringAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.notificationChannels">notificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#project MonitoringAlertPolicy#project}. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | The severity of an alert policy indicates how important incidents generated by that policy are. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `combiner`<sup>Required</sup> <a name="combiner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.combiner"></a>

- *Type:* java.lang.String

How to combine the results of multiple conditions to determine if an incident should be opened.

Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#combiner MonitoringAlertPolicy#combiner}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.conditions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#conditions MonitoringAlertPolicy#conditions}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A short name or phrase used to identify the policy in dashboards, notifications, and incidents.

To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#display_name MonitoringAlertPolicy#display_name}

---

##### `alertStrategy`<sup>Optional</sup> <a name="alertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.alertStrategy"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a>

alert_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#alert_strategy MonitoringAlertPolicy#alert_strategy}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.documentation"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#documentation MonitoringAlertPolicy#documentation}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the policy is enabled. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#enabled MonitoringAlertPolicy#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#id MonitoringAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationChannels`<sup>Optional</sup> <a name="notificationChannels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.notificationChannels"></a>

- *Type:* java.util.List<java.lang.String>

Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident.

Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#notification_channels MonitoringAlertPolicy#notification_channels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#project MonitoringAlertPolicy#project}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

The severity of an alert policy indicates how important incidents generated by that policy are.

The severity level will be displayed on the Incident
detail page and in notifications. Possible values: ["CRITICAL", "ERROR", "WARNING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#severity MonitoringAlertPolicy#severity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#timeouts MonitoringAlertPolicy#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.userLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#user_labels MonitoringAlertPolicy#user_labels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putAlertStrategy">putAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putDocumentation">putDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetAlertStrategy">resetAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetDocumentation">resetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetNotificationChannels">resetNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlertStrategy` <a name="putAlertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putAlertStrategy"></a>

```java
public void putAlertStrategy(MonitoringAlertPolicyAlertStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putAlertStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a>

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putConditions"></a>

```java
public void putConditions(IResolvable OR java.util.List<MonitoringAlertPolicyConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a>>

---

##### `putDocumentation` <a name="putDocumentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putDocumentation"></a>

```java
public void putDocumentation(MonitoringAlertPolicyDocumentation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putDocumentation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putTimeouts"></a>

```java
public void putTimeouts(MonitoringAlertPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a>

---

##### `resetAlertStrategy` <a name="resetAlertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetAlertStrategy"></a>

```java
public void resetAlertStrategy()
```

##### `resetDocumentation` <a name="resetDocumentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetDocumentation"></a>

```java
public void resetDocumentation()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetNotificationChannels` <a name="resetNotificationChannels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetNotificationChannels"></a>

```java
public void resetNotificationChannels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetUserLabels"></a>

```java
public void resetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicy;

MonitoringAlertPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicy;

MonitoringAlertPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicy;

MonitoringAlertPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicy;

MonitoringAlertPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitoringAlertPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitoringAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitoringAlertPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitoringAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.alertStrategy">alertStrategy</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference">MonitoringAlertPolicyAlertStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList">MonitoringAlertPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.creationRecord">creationRecord</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList">MonitoringAlertPolicyCreationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference">MonitoringAlertPolicyDocumentationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference">MonitoringAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.alertStrategyInput">alertStrategyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.combinerInput">combinerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.conditionsInput">conditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.documentationInput">documentationInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.notificationChannelsInput">notificationChannelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.userLabelsInput">userLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.combiner">combiner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.notificationChannels">notificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alertStrategy`<sup>Required</sup> <a name="alertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.alertStrategy"></a>

```java
public MonitoringAlertPolicyAlertStrategyOutputReference getAlertStrategy();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference">MonitoringAlertPolicyAlertStrategyOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.conditions"></a>

```java
public MonitoringAlertPolicyConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList">MonitoringAlertPolicyConditionsList</a>

---

##### `creationRecord`<sup>Required</sup> <a name="creationRecord" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.creationRecord"></a>

```java
public MonitoringAlertPolicyCreationRecordList getCreationRecord();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList">MonitoringAlertPolicyCreationRecordList</a>

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.documentation"></a>

```java
public MonitoringAlertPolicyDocumentationOutputReference getDocumentation();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference">MonitoringAlertPolicyDocumentationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.timeouts"></a>

```java
public MonitoringAlertPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference">MonitoringAlertPolicyTimeoutsOutputReference</a>

---

##### `alertStrategyInput`<sup>Optional</sup> <a name="alertStrategyInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.alertStrategyInput"></a>

```java
public MonitoringAlertPolicyAlertStrategy getAlertStrategyInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a>

---

##### `combinerInput`<sup>Optional</sup> <a name="combinerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.combinerInput"></a>

```java
public java.lang.String getCombinerInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.conditionsInput"></a>

```java
public java.lang.Object getConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a>>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `documentationInput`<sup>Optional</sup> <a name="documentationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.documentationInput"></a>

```java
public MonitoringAlertPolicyDocumentation getDocumentationInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `notificationChannelsInput`<sup>Optional</sup> <a name="notificationChannelsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.notificationChannelsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationChannelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a>

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.userLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `combiner`<sup>Required</sup> <a name="combiner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.combiner"></a>

```java
public java.lang.String getCombiner();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationChannels`<sup>Required</sup> <a name="notificationChannels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.notificationChannels"></a>

```java
public java.util.List<java.lang.String> getNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlertPolicyAlertStrategy <a name="MonitoringAlertPolicyAlertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyAlertStrategy;

MonitoringAlertPolicyAlertStrategy.builder()
//  .autoClose(java.lang.String)
//  .notificationChannelStrategy(IResolvable)
//  .notificationChannelStrategy(java.util.List<MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy>)
//  .notificationPrompts(java.util.List<java.lang.String>)
//  .notificationRateLimit(MonitoringAlertPolicyAlertStrategyNotificationRateLimit)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.autoClose">autoClose</a></code> | <code>java.lang.String</code> | If an alert policy that was active has no data for this long, any open incidents will close. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationChannelStrategy">notificationChannelStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>></code> | notification_channel_strategy block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationPrompts">notificationPrompts</a></code> | <code>java.util.List<java.lang.String></code> | Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"]. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationRateLimit">notificationRateLimit</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | notification_rate_limit block. |

---

##### `autoClose`<sup>Optional</sup> <a name="autoClose" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.autoClose"></a>

```java
public java.lang.String getAutoClose();
```

- *Type:* java.lang.String

If an alert policy that was active has no data for this long, any open incidents will close.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#auto_close MonitoringAlertPolicy#auto_close}

---

##### `notificationChannelStrategy`<sup>Optional</sup> <a name="notificationChannelStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationChannelStrategy"></a>

```java
public java.lang.Object getNotificationChannelStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>>

notification_channel_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#notification_channel_strategy MonitoringAlertPolicy#notification_channel_strategy}

---

##### `notificationPrompts`<sup>Optional</sup> <a name="notificationPrompts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationPrompts"></a>

```java
public java.util.List<java.lang.String> getNotificationPrompts();
```

- *Type:* java.util.List<java.lang.String>

Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#notification_prompts MonitoringAlertPolicy#notification_prompts}

---

##### `notificationRateLimit`<sup>Optional</sup> <a name="notificationRateLimit" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationRateLimit"></a>

```java
public MonitoringAlertPolicyAlertStrategyNotificationRateLimit getNotificationRateLimit();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

notification_rate_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#notification_rate_limit MonitoringAlertPolicy#notification_rate_limit}

---

### MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy <a name="MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy;

MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.builder()
//  .notificationChannelNames(java.util.List<java.lang.String>)
//  .renotifyInterval(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.notificationChannelNames">notificationChannelNames</a></code> | <code>java.util.List<java.lang.String></code> | The notification channels that these settings apply to. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.renotifyInterval">renotifyInterval</a></code> | <code>java.lang.String</code> | The frequency at which to send reminder notifications for open incidents. |

---

##### `notificationChannelNames`<sup>Optional</sup> <a name="notificationChannelNames" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.notificationChannelNames"></a>

```java
public java.util.List<java.lang.String> getNotificationChannelNames();
```

- *Type:* java.util.List<java.lang.String>

The notification channels that these settings apply to.

Each of these
correspond to the name field in one of the NotificationChannel objects
referenced in the notification_channels field of this AlertPolicy. The format is
'projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#notification_channel_names MonitoringAlertPolicy#notification_channel_names}

---

##### `renotifyInterval`<sup>Optional</sup> <a name="renotifyInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.renotifyInterval"></a>

```java
public java.lang.String getRenotifyInterval();
```

- *Type:* java.lang.String

The frequency at which to send reminder notifications for open incidents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#renotify_interval MonitoringAlertPolicy#renotify_interval}

---

### MonitoringAlertPolicyAlertStrategyNotificationRateLimit <a name="MonitoringAlertPolicyAlertStrategyNotificationRateLimit" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit;

MonitoringAlertPolicyAlertStrategyNotificationRateLimit.builder()
//  .period(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit.property.period">period</a></code> | <code>java.lang.String</code> | Not more than one notification per period. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Not more than one notification per period.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "60.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#period MonitoringAlertPolicy#period}

---

### MonitoringAlertPolicyConditions <a name="MonitoringAlertPolicyConditions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditions;

MonitoringAlertPolicyConditions.builder()
    .displayName(java.lang.String)
//  .conditionAbsent(MonitoringAlertPolicyConditionsConditionAbsent)
//  .conditionMatchedLog(MonitoringAlertPolicyConditionsConditionMatchedLog)
//  .conditionMonitoringQueryLanguage(MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage)
//  .conditionPrometheusQueryLanguage(MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage)
//  .conditionSql(MonitoringAlertPolicyConditionsConditionSql)
//  .conditionThreshold(MonitoringAlertPolicyConditionsConditionThreshold)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A short name or phrase used to identify the condition in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionAbsent">conditionAbsent</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a></code> | condition_absent block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionMatchedLog">conditionMatchedLog</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | condition_matched_log block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionMonitoringQueryLanguage">conditionMonitoringQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | condition_monitoring_query_language block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionPrometheusQueryLanguage">conditionPrometheusQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | condition_prometheus_query_language block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionSql">conditionSql</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a></code> | condition_sql block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionThreshold">conditionThreshold</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a></code> | condition_threshold block. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A short name or phrase used to identify the condition in dashboards, notifications, and incidents.

To avoid confusion, don't use the same
display name for multiple conditions in the same
policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#display_name MonitoringAlertPolicy#display_name}

---

##### `conditionAbsent`<sup>Optional</sup> <a name="conditionAbsent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionAbsent"></a>

```java
public MonitoringAlertPolicyConditionsConditionAbsent getConditionAbsent();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a>

condition_absent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#condition_absent MonitoringAlertPolicy#condition_absent}

---

##### `conditionMatchedLog`<sup>Optional</sup> <a name="conditionMatchedLog" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionMatchedLog"></a>

```java
public MonitoringAlertPolicyConditionsConditionMatchedLog getConditionMatchedLog();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a>

condition_matched_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#condition_matched_log MonitoringAlertPolicy#condition_matched_log}

---

##### `conditionMonitoringQueryLanguage`<sup>Optional</sup> <a name="conditionMonitoringQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionMonitoringQueryLanguage"></a>

```java
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage getConditionMonitoringQueryLanguage();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

condition_monitoring_query_language block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#condition_monitoring_query_language MonitoringAlertPolicy#condition_monitoring_query_language}

---

##### `conditionPrometheusQueryLanguage`<sup>Optional</sup> <a name="conditionPrometheusQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionPrometheusQueryLanguage"></a>

```java
public MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage getConditionPrometheusQueryLanguage();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

condition_prometheus_query_language block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#condition_prometheus_query_language MonitoringAlertPolicy#condition_prometheus_query_language}

---

##### `conditionSql`<sup>Optional</sup> <a name="conditionSql" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionSql"></a>

```java
public MonitoringAlertPolicyConditionsConditionSql getConditionSql();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a>

condition_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#condition_sql MonitoringAlertPolicy#condition_sql}

---

##### `conditionThreshold`<sup>Optional</sup> <a name="conditionThreshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionThreshold"></a>

```java
public MonitoringAlertPolicyConditionsConditionThreshold getConditionThreshold();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a>

condition_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#condition_threshold MonitoringAlertPolicy#condition_threshold}

---

### MonitoringAlertPolicyConditionsConditionAbsent <a name="MonitoringAlertPolicyConditionsConditionAbsent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionAbsent;

MonitoringAlertPolicyConditionsConditionAbsent.builder()
    .duration(java.lang.String)
//  .aggregations(IResolvable)
//  .aggregations(java.util.List<MonitoringAlertPolicyConditionsConditionAbsentAggregations>)
//  .filter(java.lang.String)
//  .trigger(MonitoringAlertPolicyConditionsConditionAbsentTrigger)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.duration">duration</a></code> | <code>java.lang.String</code> | The amount of time that a time series must fail to report new data to be considered failing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.aggregations">aggregations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations">MonitoringAlertPolicyConditionsConditionAbsentAggregations</a>></code> | aggregations block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.filter">filter</a></code> | <code>java.lang.String</code> | A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | trigger block. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The amount of time that a time series must fail to report new data to be considered failing.

Currently, only values that are a
multiple of a minute--e.g. 60s, 120s, or 300s
--are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}

---

##### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.aggregations"></a>

```java
public java.lang.Object getAggregations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations">MonitoringAlertPolicyConditionsConditionAbsentAggregations</a>>

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#aggregations MonitoringAlertPolicy#aggregations}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#filter MonitoringAlertPolicy#filter}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.trigger"></a>

```java
public MonitoringAlertPolicyConditionsConditionAbsentTrigger getTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#trigger MonitoringAlertPolicy#trigger}

---

### MonitoringAlertPolicyConditionsConditionAbsentAggregations <a name="MonitoringAlertPolicyConditionsConditionAbsentAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionAbsentAggregations;

MonitoringAlertPolicyConditionsConditionAbsentAggregations.builder()
//  .alignmentPeriod(java.lang.String)
//  .crossSeriesReducer(java.lang.String)
//  .groupByFields(java.util.List<java.lang.String>)
//  .perSeriesAligner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.alignmentPeriod">alignmentPeriod</a></code> | <code>java.lang.String</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>java.lang.String</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.groupByFields">groupByFields</a></code> | <code>java.util.List<java.lang.String></code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.perSeriesAligner">perSeriesAligner</a></code> | <code>java.lang.String</code> | The approach to be used to align individual time series. |

---

##### `alignmentPeriod`<sup>Optional</sup> <a name="alignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.alignmentPeriod"></a>

```java
public java.lang.String getAlignmentPeriod();
```

- *Type:* java.lang.String

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#alignment_period MonitoringAlertPolicy#alignment_period}

---

##### `crossSeriesReducer`<sup>Optional</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.crossSeriesReducer"></a>

```java
public java.lang.String getCrossSeriesReducer();
```

- *Type:* java.lang.String

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}

---

##### `groupByFields`<sup>Optional</sup> <a name="groupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.groupByFields"></a>

```java
public java.util.List<java.lang.String> getGroupByFields();
```

- *Type:* java.util.List<java.lang.String>

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#group_by_fields MonitoringAlertPolicy#group_by_fields}

---

##### `perSeriesAligner`<sup>Optional</sup> <a name="perSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.perSeriesAligner"></a>

```java
public java.lang.String getPerSeriesAligner();
```

- *Type:* java.lang.String

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#per_series_aligner MonitoringAlertPolicy#per_series_aligner}

---

### MonitoringAlertPolicyConditionsConditionAbsentTrigger <a name="MonitoringAlertPolicyConditionsConditionAbsentTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionAbsentTrigger;

MonitoringAlertPolicyConditionsConditionAbsentTrigger.builder()
//  .count(java.lang.Number)
//  .percent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger.property.count">count</a></code> | <code>java.lang.Number</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger.property.percent">percent</a></code> | <code>java.lang.Number</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#count MonitoringAlertPolicy#count}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#percent MonitoringAlertPolicy#percent}

---

### MonitoringAlertPolicyConditionsConditionMatchedLog <a name="MonitoringAlertPolicyConditionsConditionMatchedLog" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionMatchedLog;

MonitoringAlertPolicyConditionsConditionMatchedLog.builder()
    .filter(java.lang.String)
//  .labelExtractors(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog.property.filter">filter</a></code> | <code>java.lang.String</code> | A logs-based filter. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog.property.labelExtractors">labelExtractors</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map from a label key to an extractor expression, which is used to extract the value for this label key. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

A logs-based filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#filter MonitoringAlertPolicy#filter}

---

##### `labelExtractors`<sup>Optional</sup> <a name="labelExtractors" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog.property.labelExtractors"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelExtractors();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map from a label key to an extractor expression, which is used to extract the value for this label key.

Each entry in this map is
a specification for how data should be extracted from log entries that
match filter. Each combination of extracted values is treated as
a separate rule for the purposes of triggering notifications.
Label keys and corresponding values can be used in notifications
generated by this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#label_extractors MonitoringAlertPolicy#label_extractors}

---

### MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage <a name="MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage;

MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.builder()
    .duration(java.lang.String)
    .query(java.lang.String)
//  .evaluationMissingData(java.lang.String)
//  .trigger(MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.duration">duration</a></code> | <code>java.lang.String</code> | The amount of time that a time series must violate the threshold to be considered failing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.query">query</a></code> | <code>java.lang.String</code> | Monitoring Query Language query that outputs a boolean stream. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.evaluationMissingData">evaluationMissingData</a></code> | <code>java.lang.String</code> | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | trigger block. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Monitoring Query Language query that outputs a boolean stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#query MonitoringAlertPolicy#query}

---

##### `evaluationMissingData`<sup>Optional</sup> <a name="evaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.evaluationMissingData"></a>

```java
public java.lang.String getEvaluationMissingData();
```

- *Type:* java.lang.String

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#evaluation_missing_data MonitoringAlertPolicy#evaluation_missing_data}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.trigger"></a>

```java
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger getTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#trigger MonitoringAlertPolicy#trigger}

---

### MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger <a name="MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger;

MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.builder()
//  .count(java.lang.Number)
//  .percent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.count">count</a></code> | <code>java.lang.Number</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.percent">percent</a></code> | <code>java.lang.Number</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#count MonitoringAlertPolicy#count}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#percent MonitoringAlertPolicy#percent}

---

### MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage <a name="MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage;

MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.builder()
    .query(java.lang.String)
//  .alertRule(java.lang.String)
//  .disableMetricValidation(java.lang.Boolean)
//  .disableMetricValidation(IResolvable)
//  .duration(java.lang.String)
//  .evaluationInterval(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .ruleGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.query">query</a></code> | <code>java.lang.String</code> | The PromQL expression to evaluate. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.alertRule">alertRule</a></code> | <code>java.lang.String</code> | The alerting rule name of this alert in the corresponding Prometheus configuration file. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.disableMetricValidation">disableMetricValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable metric existence validation for this condition. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.duration">duration</a></code> | <code>java.lang.String</code> | Alerts are considered firing once their PromQL expression evaluated to be "true" for this long. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.evaluationInterval">evaluationInterval</a></code> | <code>java.lang.String</code> | How often this rule should be evaluated. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to add to or overwrite in the PromQL query result. Label names must be valid. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.ruleGroup">ruleGroup</a></code> | <code>java.lang.String</code> | The rule group name of this alert in the corresponding Prometheus configuration file. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The PromQL expression to evaluate.

Every evaluation cycle this
expression is evaluated at the current time, and all resultant time
series become pending/firing alerts. This field must not be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#query MonitoringAlertPolicy#query}

---

##### `alertRule`<sup>Optional</sup> <a name="alertRule" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.alertRule"></a>

```java
public java.lang.String getAlertRule();
```

- *Type:* java.lang.String

The alerting rule name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future.

This field is optional. If this field is not empty, then it must be a
valid Prometheus label name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#alert_rule MonitoringAlertPolicy#alert_rule}

---

##### `disableMetricValidation`<sup>Optional</sup> <a name="disableMetricValidation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.disableMetricValidation"></a>

```java
public java.lang.Object getDisableMetricValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable metric existence validation for this condition.

This allows alerting policies to be defined on metrics that do not yet
exist, improving advanced customer workflows such as configuring
alerting policies using Terraform.

Users with the 'monitoring.alertPolicyViewer' role are able to see the
name of the non-existent metric in the alerting policy condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#disable_metric_validation MonitoringAlertPolicy#disable_metric_validation}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Alerts are considered firing once their PromQL expression evaluated to be "true" for this long.

Alerts whose PromQL expression was not
evaluated to be "true" for long enough are considered pending. The
default value is zero. Must be zero or positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}

---

##### `evaluationInterval`<sup>Optional</sup> <a name="evaluationInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.evaluationInterval"></a>

```java
public java.lang.String getEvaluationInterval();
```

- *Type:* java.lang.String

How often this rule should be evaluated.

Must be a positive multiple
of 30 seconds or missing. The default value is 30 seconds. If this
PrometheusQueryLanguageCondition was generated from a Prometheus
alerting rule, then this value should be taken from the enclosing
rule group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#evaluation_interval MonitoringAlertPolicy#evaluation_interval}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to add to or overwrite in the PromQL query result. Label names must be valid.

Label values can be templatized by using variables. The only available
variable names are the names of the labels in the PromQL result,
although label names beginning with __ (two "_") are reserved for
internal use. "labels" may be empty. This field is intended to be used
for organizing and identifying the AlertPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#labels MonitoringAlertPolicy#labels}

---

##### `ruleGroup`<sup>Optional</sup> <a name="ruleGroup" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.ruleGroup"></a>

```java
public java.lang.String getRuleGroup();
```

- *Type:* java.lang.String

The rule group name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future. This field is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#rule_group MonitoringAlertPolicy#rule_group}

---

### MonitoringAlertPolicyConditionsConditionSql <a name="MonitoringAlertPolicyConditionsConditionSql" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSql;

MonitoringAlertPolicyConditionsConditionSql.builder()
    .query(java.lang.String)
//  .booleanTest(MonitoringAlertPolicyConditionsConditionSqlBooleanTest)
//  .daily(MonitoringAlertPolicyConditionsConditionSqlDaily)
//  .hourly(MonitoringAlertPolicyConditionsConditionSqlHourly)
//  .minutes(MonitoringAlertPolicyConditionsConditionSqlMinutes)
//  .rowCountTest(MonitoringAlertPolicyConditionsConditionSqlRowCountTest)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.query">query</a></code> | <code>java.lang.String</code> | The Log Analytics SQL query to run, as a string. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.booleanTest">booleanTest</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | boolean_test block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | daily block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.hourly">hourly</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | hourly block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.minutes">minutes</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | minutes block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.rowCountTest">rowCountTest</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | row_count_test block. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The Log Analytics SQL query to run, as a string.

The query must
conform to the required shape. Specifically, the query must not try to
filter the input by time.  A filter will automatically be applied
to filter the input so that the query receives all rows received
since the last time the query was run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#query MonitoringAlertPolicy#query}

---

##### `booleanTest`<sup>Optional</sup> <a name="booleanTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.booleanTest"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlBooleanTest getBooleanTest();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

boolean_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#boolean_test MonitoringAlertPolicy#boolean_test}

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.daily"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlDaily getDaily();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#daily MonitoringAlertPolicy#daily}

---

##### `hourly`<sup>Optional</sup> <a name="hourly" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.hourly"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlHourly getHourly();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a>

hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#hourly MonitoringAlertPolicy#hourly}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.minutes"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlMinutes getMinutes();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a>

minutes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#minutes MonitoringAlertPolicy#minutes}

---

##### `rowCountTest`<sup>Optional</sup> <a name="rowCountTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.rowCountTest"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlRowCountTest getRowCountTest();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

row_count_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#row_count_test MonitoringAlertPolicy#row_count_test}

---

### MonitoringAlertPolicyConditionsConditionSqlBooleanTest <a name="MonitoringAlertPolicyConditionsConditionSqlBooleanTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest;

MonitoringAlertPolicyConditionsConditionSqlBooleanTest.builder()
    .column(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest.property.column">column</a></code> | <code>java.lang.String</code> | The name of the column containing the boolean value. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

The name of the column containing the boolean value.

If the value in a row is
NULL, that row is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#column MonitoringAlertPolicy#column}

---

### MonitoringAlertPolicyConditionsConditionSqlDaily <a name="MonitoringAlertPolicyConditionsConditionSqlDaily" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlDaily;

MonitoringAlertPolicyConditionsConditionSqlDaily.builder()
    .periodicity(java.lang.Number)
//  .executionTime(MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily.property.periodicity">periodicity</a></code> | <code>java.lang.Number</code> | The number of days between runs. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily.property.executionTime">executionTime</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | execution_time block. |

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily.property.periodicity"></a>

```java
public java.lang.Number getPeriodicity();
```

- *Type:* java.lang.Number

The number of days between runs.

Must be greater than or equal
to 1 day and less than or equal to 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#periodicity MonitoringAlertPolicy#periodicity}

---

##### `executionTime`<sup>Optional</sup> <a name="executionTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily.property.executionTime"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime getExecutionTime();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

execution_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#execution_time MonitoringAlertPolicy#execution_time}

---

### MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime <a name="MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime;

MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of a day in 24 hour format.

Must be greater than or equal
to 0 and typically must be less than or equal to 23. An API may
choose to allow the value "24:00:00" for scenarios like business
closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#hours MonitoringAlertPolicy#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#minutes MonitoringAlertPolicy#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#nanos MonitoringAlertPolicy#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of a minute.

Must be greater than or equal to 0 and
typically must be less than or equal to 59. An API may allow the
value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#seconds MonitoringAlertPolicy#seconds}

---

### MonitoringAlertPolicyConditionsConditionSqlHourly <a name="MonitoringAlertPolicyConditionsConditionSqlHourly" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlHourly;

MonitoringAlertPolicyConditionsConditionSqlHourly.builder()
    .periodicity(java.lang.Number)
//  .minuteOffset(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly.property.periodicity">periodicity</a></code> | <code>java.lang.Number</code> | Number of hours between runs. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly.property.minuteOffset">minuteOffset</a></code> | <code>java.lang.Number</code> | The number of minutes after the hour (in UTC) to run the query. |

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly.property.periodicity"></a>

```java
public java.lang.Number getPeriodicity();
```

- *Type:* java.lang.Number

Number of hours between runs.

The interval must be greater than or
equal to 1 hour and less than or equal to 48 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#periodicity MonitoringAlertPolicy#periodicity}

---

##### `minuteOffset`<sup>Optional</sup> <a name="minuteOffset" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly.property.minuteOffset"></a>

```java
public java.lang.Number getMinuteOffset();
```

- *Type:* java.lang.Number

The number of minutes after the hour (in UTC) to run the query.

Must be greater than or equal to 0 minutes and less than or equal to
59 minutes.  If left unspecified, then an arbitrary offset is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#minute_offset MonitoringAlertPolicy#minute_offset}

---

### MonitoringAlertPolicyConditionsConditionSqlMinutes <a name="MonitoringAlertPolicyConditionsConditionSqlMinutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlMinutes;

MonitoringAlertPolicyConditionsConditionSqlMinutes.builder()
    .periodicity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes.property.periodicity">periodicity</a></code> | <code>java.lang.Number</code> | Number of minutes between runs. |

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes.property.periodicity"></a>

```java
public java.lang.Number getPeriodicity();
```

- *Type:* java.lang.Number

Number of minutes between runs.

The interval must be greater than or
equal to 5 minutes and less than or equal to 1440 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#periodicity MonitoringAlertPolicy#periodicity}

---

### MonitoringAlertPolicyConditionsConditionSqlRowCountTest <a name="MonitoringAlertPolicyConditionsConditionSqlRowCountTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest;

MonitoringAlertPolicyConditionsConditionSqlRowCountTest.builder()
    .comparison(java.lang.String)
    .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.comparison">comparison</a></code> | <code>java.lang.String</code> | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The value against which to compare the row count. |

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#comparison MonitoringAlertPolicy#comparison}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The value against which to compare the row count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#threshold MonitoringAlertPolicy#threshold}

---

### MonitoringAlertPolicyConditionsConditionThreshold <a name="MonitoringAlertPolicyConditionsConditionThreshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThreshold;

MonitoringAlertPolicyConditionsConditionThreshold.builder()
    .comparison(java.lang.String)
    .duration(java.lang.String)
//  .aggregations(IResolvable)
//  .aggregations(java.util.List<MonitoringAlertPolicyConditionsConditionThresholdAggregations>)
//  .denominatorAggregations(IResolvable)
//  .denominatorAggregations(java.util.List<MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations>)
//  .denominatorFilter(java.lang.String)
//  .evaluationMissingData(java.lang.String)
//  .filter(java.lang.String)
//  .forecastOptions(MonitoringAlertPolicyConditionsConditionThresholdForecastOptions)
//  .thresholdValue(java.lang.Number)
//  .trigger(MonitoringAlertPolicyConditionsConditionThresholdTrigger)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.comparison">comparison</a></code> | <code>java.lang.String</code> | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.duration">duration</a></code> | <code>java.lang.String</code> | The amount of time that a time series must violate the threshold to be considered failing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.aggregations">aggregations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations">MonitoringAlertPolicyConditionsConditionThresholdAggregations</a>></code> | aggregations block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.denominatorAggregations">denominatorAggregations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>></code> | denominator_aggregations block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.denominatorFilter">denominatorFilter</a></code> | <code>java.lang.String</code> | A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.evaluationMissingData">evaluationMissingData</a></code> | <code>java.lang.String</code> | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.filter">filter</a></code> | <code>java.lang.String</code> | A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.forecastOptions">forecastOptions</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | forecast_options block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.thresholdValue">thresholdValue</a></code> | <code>java.lang.Number</code> | A value against which to compare the time series. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | trigger block. |

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#comparison MonitoringAlertPolicy#comparison}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}

---

##### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.aggregations"></a>

```java
public java.lang.Object getAggregations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations">MonitoringAlertPolicyConditionsConditionThresholdAggregations</a>>

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#aggregations MonitoringAlertPolicy#aggregations}

---

##### `denominatorAggregations`<sup>Optional</sup> <a name="denominatorAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.denominatorAggregations"></a>

```java
public java.lang.Object getDenominatorAggregations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>>

denominator_aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#denominator_aggregations MonitoringAlertPolicy#denominator_aggregations}

---

##### `denominatorFilter`<sup>Optional</sup> <a name="denominatorFilter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.denominatorFilter"></a>

```java
public java.lang.String getDenominatorFilter();
```

- *Type:* java.lang.String

A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold.

If
a denominator_filter is specified, the time
series specified by the filter field will be
used as the numerator.The filter is similar
to the one that is specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#denominator_filter MonitoringAlertPolicy#denominator_filter}

---

##### `evaluationMissingData`<sup>Optional</sup> <a name="evaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.evaluationMissingData"></a>

```java
public java.lang.String getEvaluationMissingData();
```

- *Type:* java.lang.String

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#evaluation_missing_data MonitoringAlertPolicy#evaluation_missing_data}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#filter MonitoringAlertPolicy#filter}

---

##### `forecastOptions`<sup>Optional</sup> <a name="forecastOptions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.forecastOptions"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdForecastOptions getForecastOptions();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

forecast_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#forecast_options MonitoringAlertPolicy#forecast_options}

---

##### `thresholdValue`<sup>Optional</sup> <a name="thresholdValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.thresholdValue"></a>

```java
public java.lang.Number getThresholdValue();
```

- *Type:* java.lang.Number

A value against which to compare the time series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#threshold_value MonitoringAlertPolicy#threshold_value}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.trigger"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdTrigger getTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#trigger MonitoringAlertPolicy#trigger}

---

### MonitoringAlertPolicyConditionsConditionThresholdAggregations <a name="MonitoringAlertPolicyConditionsConditionThresholdAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdAggregations;

MonitoringAlertPolicyConditionsConditionThresholdAggregations.builder()
//  .alignmentPeriod(java.lang.String)
//  .crossSeriesReducer(java.lang.String)
//  .groupByFields(java.util.List<java.lang.String>)
//  .perSeriesAligner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.alignmentPeriod">alignmentPeriod</a></code> | <code>java.lang.String</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>java.lang.String</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.groupByFields">groupByFields</a></code> | <code>java.util.List<java.lang.String></code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.perSeriesAligner">perSeriesAligner</a></code> | <code>java.lang.String</code> | The approach to be used to align individual time series. |

---

##### `alignmentPeriod`<sup>Optional</sup> <a name="alignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.alignmentPeriod"></a>

```java
public java.lang.String getAlignmentPeriod();
```

- *Type:* java.lang.String

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#alignment_period MonitoringAlertPolicy#alignment_period}

---

##### `crossSeriesReducer`<sup>Optional</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.crossSeriesReducer"></a>

```java
public java.lang.String getCrossSeriesReducer();
```

- *Type:* java.lang.String

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}

---

##### `groupByFields`<sup>Optional</sup> <a name="groupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.groupByFields"></a>

```java
public java.util.List<java.lang.String> getGroupByFields();
```

- *Type:* java.util.List<java.lang.String>

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#group_by_fields MonitoringAlertPolicy#group_by_fields}

---

##### `perSeriesAligner`<sup>Optional</sup> <a name="perSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.perSeriesAligner"></a>

```java
public java.lang.String getPerSeriesAligner();
```

- *Type:* java.lang.String

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#per_series_aligner MonitoringAlertPolicy#per_series_aligner}

---

### MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations <a name="MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations;

MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.builder()
//  .alignmentPeriod(java.lang.String)
//  .crossSeriesReducer(java.lang.String)
//  .groupByFields(java.util.List<java.lang.String>)
//  .perSeriesAligner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.alignmentPeriod">alignmentPeriod</a></code> | <code>java.lang.String</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>java.lang.String</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.groupByFields">groupByFields</a></code> | <code>java.util.List<java.lang.String></code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.perSeriesAligner">perSeriesAligner</a></code> | <code>java.lang.String</code> | The approach to be used to align individual time series. |

---

##### `alignmentPeriod`<sup>Optional</sup> <a name="alignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.alignmentPeriod"></a>

```java
public java.lang.String getAlignmentPeriod();
```

- *Type:* java.lang.String

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#alignment_period MonitoringAlertPolicy#alignment_period}

---

##### `crossSeriesReducer`<sup>Optional</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.crossSeriesReducer"></a>

```java
public java.lang.String getCrossSeriesReducer();
```

- *Type:* java.lang.String

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}

---

##### `groupByFields`<sup>Optional</sup> <a name="groupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.groupByFields"></a>

```java
public java.util.List<java.lang.String> getGroupByFields();
```

- *Type:* java.util.List<java.lang.String>

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#group_by_fields MonitoringAlertPolicy#group_by_fields}

---

##### `perSeriesAligner`<sup>Optional</sup> <a name="perSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.perSeriesAligner"></a>

```java
public java.lang.String getPerSeriesAligner();
```

- *Type:* java.lang.String

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#per_series_aligner MonitoringAlertPolicy#per_series_aligner}

---

### MonitoringAlertPolicyConditionsConditionThresholdForecastOptions <a name="MonitoringAlertPolicyConditionsConditionThresholdForecastOptions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions;

MonitoringAlertPolicyConditionsConditionThresholdForecastOptions.builder()
    .forecastHorizon(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions.property.forecastHorizon">forecastHorizon</a></code> | <code>java.lang.String</code> | The length of time into the future to forecast whether a timeseries will violate the threshold. |

---

##### `forecastHorizon`<sup>Required</sup> <a name="forecastHorizon" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions.property.forecastHorizon"></a>

```java
public java.lang.String getForecastHorizon();
```

- *Type:* java.lang.String

The length of time into the future to forecast whether a timeseries will violate the threshold.

If the predicted value is found to violate the
threshold, and the violation is observed in all
forecasts made for the Configured 'duration',
then the timeseries is considered to be failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#forecast_horizon MonitoringAlertPolicy#forecast_horizon}

---

### MonitoringAlertPolicyConditionsConditionThresholdTrigger <a name="MonitoringAlertPolicyConditionsConditionThresholdTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdTrigger;

MonitoringAlertPolicyConditionsConditionThresholdTrigger.builder()
//  .count(java.lang.Number)
//  .percent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger.property.count">count</a></code> | <code>java.lang.Number</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger.property.percent">percent</a></code> | <code>java.lang.Number</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#count MonitoringAlertPolicy#count}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#percent MonitoringAlertPolicy#percent}

---

### MonitoringAlertPolicyConfig <a name="MonitoringAlertPolicyConfig" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConfig;

MonitoringAlertPolicyConfig.builder()
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
    .combiner(java.lang.String)
    .conditions(IResolvable)
    .conditions(java.util.List<MonitoringAlertPolicyConditions>)
    .displayName(java.lang.String)
//  .alertStrategy(MonitoringAlertPolicyAlertStrategy)
//  .documentation(MonitoringAlertPolicyDocumentation)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .notificationChannels(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .severity(java.lang.String)
//  .timeouts(MonitoringAlertPolicyTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.combiner">combiner</a></code> | <code>java.lang.String</code> | How to combine the results of multiple conditions to determine if an incident should be opened. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A short name or phrase used to identify the policy in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.alertStrategy">alertStrategy</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a></code> | alert_strategy block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the policy is enabled. The default is true. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#id MonitoringAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.notificationChannels">notificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#project MonitoringAlertPolicy#project}. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | The severity of an alert policy indicates how important incidents generated by that policy are. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `combiner`<sup>Required</sup> <a name="combiner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.combiner"></a>

```java
public java.lang.String getCombiner();
```

- *Type:* java.lang.String

How to combine the results of multiple conditions to determine if an incident should be opened.

Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#combiner MonitoringAlertPolicy#combiner}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.conditions"></a>

```java
public java.lang.Object getConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#conditions MonitoringAlertPolicy#conditions}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A short name or phrase used to identify the policy in dashboards, notifications, and incidents.

To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#display_name MonitoringAlertPolicy#display_name}

---

##### `alertStrategy`<sup>Optional</sup> <a name="alertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.alertStrategy"></a>

```java
public MonitoringAlertPolicyAlertStrategy getAlertStrategy();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a>

alert_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#alert_strategy MonitoringAlertPolicy#alert_strategy}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.documentation"></a>

```java
public MonitoringAlertPolicyDocumentation getDocumentation();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#documentation MonitoringAlertPolicy#documentation}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the policy is enabled. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#enabled MonitoringAlertPolicy#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#id MonitoringAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationChannels`<sup>Optional</sup> <a name="notificationChannels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.notificationChannels"></a>

```java
public java.util.List<java.lang.String> getNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident.

Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#notification_channels MonitoringAlertPolicy#notification_channels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#project MonitoringAlertPolicy#project}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

The severity of an alert policy indicates how important incidents generated by that policy are.

The severity level will be displayed on the Incident
detail page and in notifications. Possible values: ["CRITICAL", "ERROR", "WARNING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#severity MonitoringAlertPolicy#severity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.timeouts"></a>

```java
public MonitoringAlertPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#timeouts MonitoringAlertPolicy#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#user_labels MonitoringAlertPolicy#user_labels}

---

### MonitoringAlertPolicyCreationRecord <a name="MonitoringAlertPolicyCreationRecord" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyCreationRecord;

MonitoringAlertPolicyCreationRecord.builder()
    .build();
```


### MonitoringAlertPolicyDocumentation <a name="MonitoringAlertPolicyDocumentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyDocumentation;

MonitoringAlertPolicyDocumentation.builder()
//  .content(java.lang.String)
//  .links(IResolvable)
//  .links(java.util.List<MonitoringAlertPolicyDocumentationLinks>)
//  .mimeType(java.lang.String)
//  .subject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.content">content</a></code> | <code>java.lang.String</code> | The text of the documentation, interpreted according to mimeType. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.links">links</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks">MonitoringAlertPolicyDocumentationLinks</a>></code> | links block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.mimeType">mimeType</a></code> | <code>java.lang.String</code> | The format of the content field. Presently, only the value "text/markdown" is supported. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.subject">subject</a></code> | <code>java.lang.String</code> | The subject line of the notification. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The text of the documentation, interpreted according to mimeType.

The content may not exceed 8,192 Unicode characters and may not
exceed more than 10,240 bytes when encoded in UTF-8 format,
whichever is smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#content MonitoringAlertPolicy#content}

---

##### `links`<sup>Optional</sup> <a name="links" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.links"></a>

```java
public java.lang.Object getLinks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks">MonitoringAlertPolicyDocumentationLinks</a>>

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#links MonitoringAlertPolicy#links}

---

##### `mimeType`<sup>Optional</sup> <a name="mimeType" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.mimeType"></a>

```java
public java.lang.String getMimeType();
```

- *Type:* java.lang.String

The format of the content field. Presently, only the value "text/markdown" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#mime_type MonitoringAlertPolicy#mime_type}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

The subject line of the notification.

The subject line may not
exceed 10,240 bytes. In notifications generated by this policy the contents
of the subject line after variable expansion will be truncated to 255 bytes
or shorter at the latest UTF-8 character boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#subject MonitoringAlertPolicy#subject}

---

### MonitoringAlertPolicyDocumentationLinks <a name="MonitoringAlertPolicyDocumentationLinks" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyDocumentationLinks;

MonitoringAlertPolicyDocumentationLinks.builder()
//  .displayName(java.lang.String)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A short display name for the link. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks.property.url">url</a></code> | <code>java.lang.String</code> | The url of a webpage. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A short display name for the link.

The display name must not be empty or exceed 63 characters. Example: "playbook".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#display_name MonitoringAlertPolicy#display_name}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The url of a webpage.

A url can be templatized by using variables in the path or the query parameters. The total length of a URL should not exceed 2083 characters before and after variable expansion. Example: "https://my_domain.com/playbook?name=${resource.name}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#url MonitoringAlertPolicy#url}

---

### MonitoringAlertPolicyTimeouts <a name="MonitoringAlertPolicyTimeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyTimeouts;

MonitoringAlertPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#create MonitoringAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#delete MonitoringAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#update MonitoringAlertPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#create MonitoringAlertPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#delete MonitoringAlertPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/monitoring_alert_policy#update MonitoringAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList <a name="MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList;

new MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get"></a>

```java
public MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>>

---


### MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference <a name="MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference;

new MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetNotificationChannelNames">resetNotificationChannelNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetRenotifyInterval">resetRenotifyInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotificationChannelNames` <a name="resetNotificationChannelNames" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetNotificationChannelNames"></a>

```java
public void resetNotificationChannelNames()
```

##### `resetRenotifyInterval` <a name="resetRenotifyInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetRenotifyInterval"></a>

```java
public void resetRenotifyInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNamesInput">notificationChannelNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyIntervalInput">renotifyIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNames">notificationChannelNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyInterval">renotifyInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notificationChannelNamesInput`<sup>Optional</sup> <a name="notificationChannelNamesInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNamesInput"></a>

```java
public java.util.List<java.lang.String> getNotificationChannelNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renotifyIntervalInput`<sup>Optional</sup> <a name="renotifyIntervalInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyIntervalInput"></a>

```java
public java.lang.String getRenotifyIntervalInput();
```

- *Type:* java.lang.String

---

##### `notificationChannelNames`<sup>Required</sup> <a name="notificationChannelNames" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNames"></a>

```java
public java.util.List<java.lang.String> getNotificationChannelNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renotifyInterval`<sup>Required</sup> <a name="renotifyInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyInterval"></a>

```java
public java.lang.String getRenotifyInterval();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>

---


### MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference <a name="MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference;

new MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyAlertStrategyNotificationRateLimit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---


### MonitoringAlertPolicyAlertStrategyOutputReference <a name="MonitoringAlertPolicyAlertStrategyOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyAlertStrategyOutputReference;

new MonitoringAlertPolicyAlertStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy">putNotificationChannelStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit">putNotificationRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetAutoClose">resetAutoClose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationChannelStrategy">resetNotificationChannelStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationPrompts">resetNotificationPrompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationRateLimit">resetNotificationRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotificationChannelStrategy` <a name="putNotificationChannelStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy"></a>

```java
public void putNotificationChannelStrategy(IResolvable OR java.util.List<MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>>

---

##### `putNotificationRateLimit` <a name="putNotificationRateLimit" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit"></a>

```java
public void putNotificationRateLimit(MonitoringAlertPolicyAlertStrategyNotificationRateLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---

##### `resetAutoClose` <a name="resetAutoClose" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetAutoClose"></a>

```java
public void resetAutoClose()
```

##### `resetNotificationChannelStrategy` <a name="resetNotificationChannelStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationChannelStrategy"></a>

```java
public void resetNotificationChannelStrategy()
```

##### `resetNotificationPrompts` <a name="resetNotificationPrompts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationPrompts"></a>

```java
public void resetNotificationPrompts()
```

##### `resetNotificationRateLimit` <a name="resetNotificationRateLimit" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationRateLimit"></a>

```java
public void resetNotificationRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategy">notificationChannelStrategy</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimit">notificationRateLimit</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference">MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.autoCloseInput">autoCloseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategyInput">notificationChannelStrategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPromptsInput">notificationPromptsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimitInput">notificationRateLimitInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.autoClose">autoClose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPrompts">notificationPrompts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notificationChannelStrategy`<sup>Required</sup> <a name="notificationChannelStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategy"></a>

```java
public MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList getNotificationChannelStrategy();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList</a>

---

##### `notificationRateLimit`<sup>Required</sup> <a name="notificationRateLimit" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimit"></a>

```java
public MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference getNotificationRateLimit();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference">MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference</a>

---

##### `autoCloseInput`<sup>Optional</sup> <a name="autoCloseInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.autoCloseInput"></a>

```java
public java.lang.String getAutoCloseInput();
```

- *Type:* java.lang.String

---

##### `notificationChannelStrategyInput`<sup>Optional</sup> <a name="notificationChannelStrategyInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategyInput"></a>

```java
public java.lang.Object getNotificationChannelStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>>

---

##### `notificationPromptsInput`<sup>Optional</sup> <a name="notificationPromptsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPromptsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationPromptsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notificationRateLimitInput`<sup>Optional</sup> <a name="notificationRateLimitInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimitInput"></a>

```java
public MonitoringAlertPolicyAlertStrategyNotificationRateLimit getNotificationRateLimitInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---

##### `autoClose`<sup>Required</sup> <a name="autoClose" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.autoClose"></a>

```java
public java.lang.String getAutoClose();
```

- *Type:* java.lang.String

---

##### `notificationPrompts`<sup>Required</sup> <a name="notificationPrompts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPrompts"></a>

```java
public java.util.List<java.lang.String> getNotificationPrompts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyAlertStrategy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a>

---


### MonitoringAlertPolicyConditionsConditionAbsentAggregationsList <a name="MonitoringAlertPolicyConditionsConditionAbsentAggregationsList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList;

new MonitoringAlertPolicyConditionsConditionAbsentAggregationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get"></a>

```java
public MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations">MonitoringAlertPolicyConditionsConditionAbsentAggregations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations">MonitoringAlertPolicyConditionsConditionAbsentAggregations</a>>

---


### MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference <a name="MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference;

new MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetAlignmentPeriod">resetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetCrossSeriesReducer">resetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetGroupByFields">resetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetPerSeriesAligner">resetPerSeriesAligner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlignmentPeriod` <a name="resetAlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetAlignmentPeriod"></a>

```java
public void resetAlignmentPeriod()
```

##### `resetCrossSeriesReducer` <a name="resetCrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetCrossSeriesReducer"></a>

```java
public void resetCrossSeriesReducer()
```

##### `resetGroupByFields` <a name="resetGroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetGroupByFields"></a>

```java
public void resetGroupByFields()
```

##### `resetPerSeriesAligner` <a name="resetPerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetPerSeriesAligner"></a>

```java
public void resetPerSeriesAligner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriodInput">alignmentPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducerInput">crossSeriesReducerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFieldsInput">groupByFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAlignerInput">perSeriesAlignerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriod">alignmentPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFields">groupByFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAligner">perSeriesAligner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations">MonitoringAlertPolicyConditionsConditionAbsentAggregations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alignmentPeriodInput`<sup>Optional</sup> <a name="alignmentPeriodInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriodInput"></a>

```java
public java.lang.String getAlignmentPeriodInput();
```

- *Type:* java.lang.String

---

##### `crossSeriesReducerInput`<sup>Optional</sup> <a name="crossSeriesReducerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```java
public java.lang.String getCrossSeriesReducerInput();
```

- *Type:* java.lang.String

---

##### `groupByFieldsInput`<sup>Optional</sup> <a name="groupByFieldsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFieldsInput"></a>

```java
public java.util.List<java.lang.String> getGroupByFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `perSeriesAlignerInput`<sup>Optional</sup> <a name="perSeriesAlignerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```java
public java.lang.String getPerSeriesAlignerInput();
```

- *Type:* java.lang.String

---

##### `alignmentPeriod`<sup>Required</sup> <a name="alignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriod"></a>

```java
public java.lang.String getAlignmentPeriod();
```

- *Type:* java.lang.String

---

##### `crossSeriesReducer`<sup>Required</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducer"></a>

```java
public java.lang.String getCrossSeriesReducer();
```

- *Type:* java.lang.String

---

##### `groupByFields`<sup>Required</sup> <a name="groupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFields"></a>

```java
public java.util.List<java.lang.String> getGroupByFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `perSeriesAligner`<sup>Required</sup> <a name="perSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAligner"></a>

```java
public java.lang.String getPerSeriesAligner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations">MonitoringAlertPolicyConditionsConditionAbsentAggregations</a>

---


### MonitoringAlertPolicyConditionsConditionAbsentOutputReference <a name="MonitoringAlertPolicyConditionsConditionAbsentOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference;

new MonitoringAlertPolicyConditionsConditionAbsentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations">putAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetAggregations">resetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAggregations` <a name="putAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations"></a>

```java
public void putAggregations(IResolvable OR java.util.List<MonitoringAlertPolicyConditionsConditionAbsentAggregations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations">MonitoringAlertPolicyConditionsConditionAbsentAggregations</a>>

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger"></a>

```java
public void putTrigger(MonitoringAlertPolicyConditionsConditionAbsentTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---

##### `resetAggregations` <a name="resetAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetAggregations"></a>

```java
public void resetAggregations()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetTrigger"></a>

```java
public void resetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregations">aggregations</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList">MonitoringAlertPolicyConditionsConditionAbsentAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference">MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregationsInput">aggregationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations">MonitoringAlertPolicyConditionsConditionAbsentAggregations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregations`<sup>Required</sup> <a name="aggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregations"></a>

```java
public MonitoringAlertPolicyConditionsConditionAbsentAggregationsList getAggregations();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList">MonitoringAlertPolicyConditionsConditionAbsentAggregationsList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.trigger"></a>

```java
public MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference getTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference">MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference</a>

---

##### `aggregationsInput`<sup>Optional</sup> <a name="aggregationsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregationsInput"></a>

```java
public java.lang.Object getAggregationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations">MonitoringAlertPolicyConditionsConditionAbsentAggregations</a>>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.triggerInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionAbsentTrigger getTriggerInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionAbsent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a>

---


### MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference <a name="MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference;

new MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetPercent"></a>

```java
public void resetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionAbsentTrigger getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---


### MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference <a name="MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference;

new MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resetLabelExtractors">resetLabelExtractors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelExtractors` <a name="resetLabelExtractors" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resetLabelExtractors"></a>

```java
public void resetLabelExtractors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractorsInput">labelExtractorsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractors">labelExtractors</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `labelExtractorsInput`<sup>Optional</sup> <a name="labelExtractorsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractorsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelExtractorsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `labelExtractors`<sup>Required</sup> <a name="labelExtractors" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractors"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelExtractors();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionMatchedLog getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a>

---


### MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference <a name="MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference;

new MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetEvaluationMissingData">resetEvaluationMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger"></a>

```java
public void putTrigger(MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---

##### `resetEvaluationMissingData` <a name="resetEvaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetEvaluationMissingData"></a>

```java
public void resetEvaluationMissingData()
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetTrigger"></a>

```java
public void resetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingDataInput">evaluationMissingDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingData">evaluationMissingData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.trigger"></a>

```java
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference getTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `evaluationMissingDataInput`<sup>Optional</sup> <a name="evaluationMissingDataInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingDataInput"></a>

```java
public java.lang.String getEvaluationMissingDataInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.triggerInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger getTriggerInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `evaluationMissingData`<sup>Required</sup> <a name="evaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingData"></a>

```java
public java.lang.String getEvaluationMissingData();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---


### MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference <a name="MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference;

new MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetPercent"></a>

```java
public void resetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---


### MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference <a name="MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference;

new MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetAlertRule">resetAlertRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDisableMetricValidation">resetDisableMetricValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetEvaluationInterval">resetEvaluationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetRuleGroup">resetRuleGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlertRule` <a name="resetAlertRule" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetAlertRule"></a>

```java
public void resetAlertRule()
```

##### `resetDisableMetricValidation` <a name="resetDisableMetricValidation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDisableMetricValidation"></a>

```java
public void resetDisableMetricValidation()
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetEvaluationInterval` <a name="resetEvaluationInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetEvaluationInterval"></a>

```java
public void resetEvaluationInterval()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetRuleGroup` <a name="resetRuleGroup" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetRuleGroup"></a>

```java
public void resetRuleGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRuleInput">alertRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidationInput">disableMetricValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationIntervalInput">evaluationIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroupInput">ruleGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRule">alertRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidation">disableMetricValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationInterval">evaluationInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroup">ruleGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alertRuleInput`<sup>Optional</sup> <a name="alertRuleInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRuleInput"></a>

```java
public java.lang.String getAlertRuleInput();
```

- *Type:* java.lang.String

---

##### `disableMetricValidationInput`<sup>Optional</sup> <a name="disableMetricValidationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidationInput"></a>

```java
public java.lang.Object getDisableMetricValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `evaluationIntervalInput`<sup>Optional</sup> <a name="evaluationIntervalInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationIntervalInput"></a>

```java
public java.lang.String getEvaluationIntervalInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `ruleGroupInput`<sup>Optional</sup> <a name="ruleGroupInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroupInput"></a>

```java
public java.lang.String getRuleGroupInput();
```

- *Type:* java.lang.String

---

##### `alertRule`<sup>Required</sup> <a name="alertRule" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRule"></a>

```java
public java.lang.String getAlertRule();
```

- *Type:* java.lang.String

---

##### `disableMetricValidation`<sup>Required</sup> <a name="disableMetricValidation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidation"></a>

```java
public java.lang.Object getDisableMetricValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `evaluationInterval`<sup>Required</sup> <a name="evaluationInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationInterval"></a>

```java
public java.lang.String getEvaluationInterval();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `ruleGroup`<sup>Required</sup> <a name="ruleGroup" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroup"></a>

```java
public java.lang.String getRuleGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---


### MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference;

new MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.columnInput">columnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.column">column</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.columnInput"></a>

```java
public java.lang.String getColumnInput();
```

- *Type:* java.lang.String

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlBooleanTest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---


### MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference;

new MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---


### MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference;

new MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime">putExecutionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resetExecutionTime">resetExecutionTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExecutionTime` <a name="putExecutionTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime"></a>

```java
public void putExecutionTime(MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---

##### `resetExecutionTime` <a name="resetExecutionTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resetExecutionTime"></a>

```java
public void resetExecutionTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTime">executionTime</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTimeInput">executionTimeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicityInput">periodicityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicity">periodicity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionTime`<sup>Required</sup> <a name="executionTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTime"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference getExecutionTime();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference</a>

---

##### `executionTimeInput`<sup>Optional</sup> <a name="executionTimeInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTimeInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime getExecutionTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---

##### `periodicityInput`<sup>Optional</sup> <a name="periodicityInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicityInput"></a>

```java
public java.lang.Number getPeriodicityInput();
```

- *Type:* java.lang.Number

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicity"></a>

```java
public java.lang.Number getPeriodicity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlDaily getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a>

---


### MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference;

new MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resetMinuteOffset">resetMinuteOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinuteOffset` <a name="resetMinuteOffset" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resetMinuteOffset"></a>

```java
public void resetMinuteOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffsetInput">minuteOffsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicityInput">periodicityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffset">minuteOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicity">periodicity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minuteOffsetInput`<sup>Optional</sup> <a name="minuteOffsetInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffsetInput"></a>

```java
public java.lang.Number getMinuteOffsetInput();
```

- *Type:* java.lang.Number

---

##### `periodicityInput`<sup>Optional</sup> <a name="periodicityInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicityInput"></a>

```java
public java.lang.Number getPeriodicityInput();
```

- *Type:* java.lang.Number

---

##### `minuteOffset`<sup>Required</sup> <a name="minuteOffset" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffset"></a>

```java
public java.lang.Number getMinuteOffset();
```

- *Type:* java.lang.Number

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicity"></a>

```java
public java.lang.Number getPeriodicity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlHourly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a>

---


### MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference;

new MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicityInput">periodicityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicity">periodicity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodicityInput`<sup>Optional</sup> <a name="periodicityInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicityInput"></a>

```java
public java.lang.Number getPeriodicityInput();
```

- *Type:* java.lang.Number

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicity"></a>

```java
public java.lang.Number getPeriodicity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlMinutes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---


### MonitoringAlertPolicyConditionsConditionSqlOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlOutputReference;

new MonitoringAlertPolicyConditionsConditionSqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest">putBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily">putDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly">putHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes">putMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest">putRowCountTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetBooleanTest">resetBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetHourly">resetHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetRowCountTest">resetRowCountTest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBooleanTest` <a name="putBooleanTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest"></a>

```java
public void putBooleanTest(MonitoringAlertPolicyConditionsConditionSqlBooleanTest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---

##### `putDaily` <a name="putDaily" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily"></a>

```java
public void putDaily(MonitoringAlertPolicyConditionsConditionSqlDaily value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a>

---

##### `putHourly` <a name="putHourly" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly"></a>

```java
public void putHourly(MonitoringAlertPolicyConditionsConditionSqlHourly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a>

---

##### `putMinutes` <a name="putMinutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes"></a>

```java
public void putMinutes(MonitoringAlertPolicyConditionsConditionSqlMinutes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---

##### `putRowCountTest` <a name="putRowCountTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest"></a>

```java
public void putRowCountTest(MonitoringAlertPolicyConditionsConditionSqlRowCountTest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---

##### `resetBooleanTest` <a name="resetBooleanTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetBooleanTest"></a>

```java
public void resetBooleanTest()
```

##### `resetDaily` <a name="resetDaily" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetDaily"></a>

```java
public void resetDaily()
```

##### `resetHourly` <a name="resetHourly" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetHourly"></a>

```java
public void resetHourly()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetRowCountTest` <a name="resetRowCountTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetRowCountTest"></a>

```java
public void resetRowCountTest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTest">booleanTest</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference">MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference">MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourly">hourly</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference">MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutes">minutes</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference">MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTest">rowCountTest</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference">MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTestInput">booleanTestInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.dailyInput">dailyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourlyInput">hourlyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutesInput">minutesInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTestInput">rowCountTestInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanTest`<sup>Required</sup> <a name="booleanTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTest"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference getBooleanTest();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference">MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference</a>

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.daily"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference getDaily();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference">MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference</a>

---

##### `hourly`<sup>Required</sup> <a name="hourly" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourly"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference getHourly();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference">MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference</a>

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutes"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference getMinutes();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference">MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference</a>

---

##### `rowCountTest`<sup>Required</sup> <a name="rowCountTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTest"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference getRowCountTest();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference">MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference</a>

---

##### `booleanTestInput`<sup>Optional</sup> <a name="booleanTestInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTestInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlBooleanTest getBooleanTestInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.dailyInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlDaily getDailyInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a>

---

##### `hourlyInput`<sup>Optional</sup> <a name="hourlyInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourlyInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlHourly getHourlyInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a>

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutesInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlMinutes getMinutesInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `rowCountTestInput`<sup>Optional</sup> <a name="rowCountTestInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTestInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlRowCountTest getRowCountTestInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionSql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a>

---


### MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference;

new MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlRowCountTest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---


### MonitoringAlertPolicyConditionsConditionThresholdAggregationsList <a name="MonitoringAlertPolicyConditionsConditionThresholdAggregationsList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList;

new MonitoringAlertPolicyConditionsConditionThresholdAggregationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations">MonitoringAlertPolicyConditionsConditionThresholdAggregations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations">MonitoringAlertPolicyConditionsConditionThresholdAggregations</a>>

---


### MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference <a name="MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference;

new MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetAlignmentPeriod">resetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetCrossSeriesReducer">resetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetGroupByFields">resetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetPerSeriesAligner">resetPerSeriesAligner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlignmentPeriod` <a name="resetAlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetAlignmentPeriod"></a>

```java
public void resetAlignmentPeriod()
```

##### `resetCrossSeriesReducer` <a name="resetCrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetCrossSeriesReducer"></a>

```java
public void resetCrossSeriesReducer()
```

##### `resetGroupByFields` <a name="resetGroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetGroupByFields"></a>

```java
public void resetGroupByFields()
```

##### `resetPerSeriesAligner` <a name="resetPerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetPerSeriesAligner"></a>

```java
public void resetPerSeriesAligner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriodInput">alignmentPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducerInput">crossSeriesReducerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFieldsInput">groupByFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAlignerInput">perSeriesAlignerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriod">alignmentPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFields">groupByFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAligner">perSeriesAligner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations">MonitoringAlertPolicyConditionsConditionThresholdAggregations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alignmentPeriodInput`<sup>Optional</sup> <a name="alignmentPeriodInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriodInput"></a>

```java
public java.lang.String getAlignmentPeriodInput();
```

- *Type:* java.lang.String

---

##### `crossSeriesReducerInput`<sup>Optional</sup> <a name="crossSeriesReducerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```java
public java.lang.String getCrossSeriesReducerInput();
```

- *Type:* java.lang.String

---

##### `groupByFieldsInput`<sup>Optional</sup> <a name="groupByFieldsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFieldsInput"></a>

```java
public java.util.List<java.lang.String> getGroupByFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `perSeriesAlignerInput`<sup>Optional</sup> <a name="perSeriesAlignerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```java
public java.lang.String getPerSeriesAlignerInput();
```

- *Type:* java.lang.String

---

##### `alignmentPeriod`<sup>Required</sup> <a name="alignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriod"></a>

```java
public java.lang.String getAlignmentPeriod();
```

- *Type:* java.lang.String

---

##### `crossSeriesReducer`<sup>Required</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducer"></a>

```java
public java.lang.String getCrossSeriesReducer();
```

- *Type:* java.lang.String

---

##### `groupByFields`<sup>Required</sup> <a name="groupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFields"></a>

```java
public java.util.List<java.lang.String> getGroupByFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `perSeriesAligner`<sup>Required</sup> <a name="perSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAligner"></a>

```java
public java.lang.String getPerSeriesAligner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations">MonitoringAlertPolicyConditionsConditionThresholdAggregations</a>

---


### MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList <a name="MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList;

new MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>>

---


### MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference <a name="MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference;

new MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetAlignmentPeriod">resetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetCrossSeriesReducer">resetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetGroupByFields">resetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetPerSeriesAligner">resetPerSeriesAligner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlignmentPeriod` <a name="resetAlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetAlignmentPeriod"></a>

```java
public void resetAlignmentPeriod()
```

##### `resetCrossSeriesReducer` <a name="resetCrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetCrossSeriesReducer"></a>

```java
public void resetCrossSeriesReducer()
```

##### `resetGroupByFields` <a name="resetGroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetGroupByFields"></a>

```java
public void resetGroupByFields()
```

##### `resetPerSeriesAligner` <a name="resetPerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetPerSeriesAligner"></a>

```java
public void resetPerSeriesAligner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriodInput">alignmentPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducerInput">crossSeriesReducerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFieldsInput">groupByFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAlignerInput">perSeriesAlignerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriod">alignmentPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducer">crossSeriesReducer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFields">groupByFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAligner">perSeriesAligner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alignmentPeriodInput`<sup>Optional</sup> <a name="alignmentPeriodInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriodInput"></a>

```java
public java.lang.String getAlignmentPeriodInput();
```

- *Type:* java.lang.String

---

##### `crossSeriesReducerInput`<sup>Optional</sup> <a name="crossSeriesReducerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```java
public java.lang.String getCrossSeriesReducerInput();
```

- *Type:* java.lang.String

---

##### `groupByFieldsInput`<sup>Optional</sup> <a name="groupByFieldsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFieldsInput"></a>

```java
public java.util.List<java.lang.String> getGroupByFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `perSeriesAlignerInput`<sup>Optional</sup> <a name="perSeriesAlignerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```java
public java.lang.String getPerSeriesAlignerInput();
```

- *Type:* java.lang.String

---

##### `alignmentPeriod`<sup>Required</sup> <a name="alignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriod"></a>

```java
public java.lang.String getAlignmentPeriod();
```

- *Type:* java.lang.String

---

##### `crossSeriesReducer`<sup>Required</sup> <a name="crossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducer"></a>

```java
public java.lang.String getCrossSeriesReducer();
```

- *Type:* java.lang.String

---

##### `groupByFields`<sup>Required</sup> <a name="groupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFields"></a>

```java
public java.util.List<java.lang.String> getGroupByFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `perSeriesAligner`<sup>Required</sup> <a name="perSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAligner"></a>

```java
public java.lang.String getPerSeriesAligner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>

---


### MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference <a name="MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference;

new MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizonInput">forecastHorizonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizon">forecastHorizon</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forecastHorizonInput`<sup>Optional</sup> <a name="forecastHorizonInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizonInput"></a>

```java
public java.lang.String getForecastHorizonInput();
```

- *Type:* java.lang.String

---

##### `forecastHorizon`<sup>Required</sup> <a name="forecastHorizon" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizon"></a>

```java
public java.lang.String getForecastHorizon();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdForecastOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---


### MonitoringAlertPolicyConditionsConditionThresholdOutputReference <a name="MonitoringAlertPolicyConditionsConditionThresholdOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference;

new MonitoringAlertPolicyConditionsConditionThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations">putAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations">putDenominatorAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions">putForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetAggregations">resetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorAggregations">resetDenominatorAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorFilter">resetDenominatorFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetEvaluationMissingData">resetEvaluationMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetForecastOptions">resetForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetThresholdValue">resetThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAggregations` <a name="putAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations"></a>

```java
public void putAggregations(IResolvable OR java.util.List<MonitoringAlertPolicyConditionsConditionThresholdAggregations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations">MonitoringAlertPolicyConditionsConditionThresholdAggregations</a>>

---

##### `putDenominatorAggregations` <a name="putDenominatorAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations"></a>

```java
public void putDenominatorAggregations(IResolvable OR java.util.List<MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>>

---

##### `putForecastOptions` <a name="putForecastOptions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions"></a>

```java
public void putForecastOptions(MonitoringAlertPolicyConditionsConditionThresholdForecastOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger"></a>

```java
public void putTrigger(MonitoringAlertPolicyConditionsConditionThresholdTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---

##### `resetAggregations` <a name="resetAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetAggregations"></a>

```java
public void resetAggregations()
```

##### `resetDenominatorAggregations` <a name="resetDenominatorAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorAggregations"></a>

```java
public void resetDenominatorAggregations()
```

##### `resetDenominatorFilter` <a name="resetDenominatorFilter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorFilter"></a>

```java
public void resetDenominatorFilter()
```

##### `resetEvaluationMissingData` <a name="resetEvaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetEvaluationMissingData"></a>

```java
public void resetEvaluationMissingData()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetForecastOptions` <a name="resetForecastOptions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetForecastOptions"></a>

```java
public void resetForecastOptions()
```

##### `resetThresholdValue` <a name="resetThresholdValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetThresholdValue"></a>

```java
public void resetThresholdValue()
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetTrigger"></a>

```java
public void resetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregations">aggregations</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList">MonitoringAlertPolicyConditionsConditionThresholdAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregations">denominatorAggregations</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptions">forecastOptions</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference">MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference">MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregationsInput">aggregationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations">MonitoringAlertPolicyConditionsConditionThresholdAggregations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregationsInput">denominatorAggregationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilterInput">denominatorFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingDataInput">evaluationMissingDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptionsInput">forecastOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValueInput">thresholdValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilter">denominatorFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingData">evaluationMissingData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValue">thresholdValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregations`<sup>Required</sup> <a name="aggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregations"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdAggregationsList getAggregations();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList">MonitoringAlertPolicyConditionsConditionThresholdAggregationsList</a>

---

##### `denominatorAggregations`<sup>Required</sup> <a name="denominatorAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregations"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList getDenominatorAggregations();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList</a>

---

##### `forecastOptions`<sup>Required</sup> <a name="forecastOptions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptions"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference getForecastOptions();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference">MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.trigger"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference getTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference">MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference</a>

---

##### `aggregationsInput`<sup>Optional</sup> <a name="aggregationsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregationsInput"></a>

```java
public java.lang.Object getAggregationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations">MonitoringAlertPolicyConditionsConditionThresholdAggregations</a>>

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `denominatorAggregationsInput`<sup>Optional</sup> <a name="denominatorAggregationsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregationsInput"></a>

```java
public java.lang.Object getDenominatorAggregationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>>

---

##### `denominatorFilterInput`<sup>Optional</sup> <a name="denominatorFilterInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilterInput"></a>

```java
public java.lang.String getDenominatorFilterInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `evaluationMissingDataInput`<sup>Optional</sup> <a name="evaluationMissingDataInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingDataInput"></a>

```java
public java.lang.String getEvaluationMissingDataInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `forecastOptionsInput`<sup>Optional</sup> <a name="forecastOptionsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptionsInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdForecastOptions getForecastOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---

##### `thresholdValueInput`<sup>Optional</sup> <a name="thresholdValueInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValueInput"></a>

```java
public java.lang.Number getThresholdValueInput();
```

- *Type:* java.lang.Number

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.triggerInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdTrigger getTriggerInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `denominatorFilter`<sup>Required</sup> <a name="denominatorFilter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilter"></a>

```java
public java.lang.String getDenominatorFilter();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `evaluationMissingData`<sup>Required</sup> <a name="evaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingData"></a>

```java
public java.lang.String getEvaluationMissingData();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `thresholdValue`<sup>Required</sup> <a name="thresholdValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValue"></a>

```java
public java.lang.Number getThresholdValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionThreshold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a>

---


### MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference <a name="MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference;

new MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetPercent"></a>

```java
public void resetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdTrigger getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---


### MonitoringAlertPolicyConditionsList <a name="MonitoringAlertPolicyConditionsList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsList;

new MonitoringAlertPolicyConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.get"></a>

```java
public MonitoringAlertPolicyConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a>>

---


### MonitoringAlertPolicyConditionsOutputReference <a name="MonitoringAlertPolicyConditionsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyConditionsOutputReference;

new MonitoringAlertPolicyConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionAbsent">putConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog">putConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage">putConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage">putConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionSql">putConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionThreshold">putConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionAbsent">resetConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionMatchedLog">resetConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionMonitoringQueryLanguage">resetConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionPrometheusQueryLanguage">resetConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionSql">resetConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionThreshold">resetConditionThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionAbsent` <a name="putConditionAbsent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionAbsent"></a>

```java
public void putConditionAbsent(MonitoringAlertPolicyConditionsConditionAbsent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionAbsent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a>

---

##### `putConditionMatchedLog` <a name="putConditionMatchedLog" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog"></a>

```java
public void putConditionMatchedLog(MonitoringAlertPolicyConditionsConditionMatchedLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a>

---

##### `putConditionMonitoringQueryLanguage` <a name="putConditionMonitoringQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage"></a>

```java
public void putConditionMonitoringQueryLanguage(MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---

##### `putConditionPrometheusQueryLanguage` <a name="putConditionPrometheusQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage"></a>

```java
public void putConditionPrometheusQueryLanguage(MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---

##### `putConditionSql` <a name="putConditionSql" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionSql"></a>

```java
public void putConditionSql(MonitoringAlertPolicyConditionsConditionSql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a>

---

##### `putConditionThreshold` <a name="putConditionThreshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionThreshold"></a>

```java
public void putConditionThreshold(MonitoringAlertPolicyConditionsConditionThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a>

---

##### `resetConditionAbsent` <a name="resetConditionAbsent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionAbsent"></a>

```java
public void resetConditionAbsent()
```

##### `resetConditionMatchedLog` <a name="resetConditionMatchedLog" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionMatchedLog"></a>

```java
public void resetConditionMatchedLog()
```

##### `resetConditionMonitoringQueryLanguage` <a name="resetConditionMonitoringQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionMonitoringQueryLanguage"></a>

```java
public void resetConditionMonitoringQueryLanguage()
```

##### `resetConditionPrometheusQueryLanguage` <a name="resetConditionPrometheusQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionPrometheusQueryLanguage"></a>

```java
public void resetConditionPrometheusQueryLanguage()
```

##### `resetConditionSql` <a name="resetConditionSql" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionSql"></a>

```java
public void resetConditionSql()
```

##### `resetConditionThreshold` <a name="resetConditionThreshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionThreshold"></a>

```java
public void resetConditionThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionAbsent">conditionAbsent</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference">MonitoringAlertPolicyConditionsConditionAbsentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLog">conditionMatchedLog</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference">MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguage">conditionMonitoringQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguage">conditionPrometheusQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionSql">conditionSql</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference">MonitoringAlertPolicyConditionsConditionSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionThreshold">conditionThreshold</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference">MonitoringAlertPolicyConditionsConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionAbsentInput">conditionAbsentInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLogInput">conditionMatchedLogInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguageInput">conditionMonitoringQueryLanguageInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguageInput">conditionPrometheusQueryLanguageInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionSqlInput">conditionSqlInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionThresholdInput">conditionThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionAbsent`<sup>Required</sup> <a name="conditionAbsent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionAbsent"></a>

```java
public MonitoringAlertPolicyConditionsConditionAbsentOutputReference getConditionAbsent();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference">MonitoringAlertPolicyConditionsConditionAbsentOutputReference</a>

---

##### `conditionMatchedLog`<sup>Required</sup> <a name="conditionMatchedLog" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLog"></a>

```java
public MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference getConditionMatchedLog();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference">MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference</a>

---

##### `conditionMonitoringQueryLanguage`<sup>Required</sup> <a name="conditionMonitoringQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguage"></a>

```java
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference getConditionMonitoringQueryLanguage();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference</a>

---

##### `conditionPrometheusQueryLanguage`<sup>Required</sup> <a name="conditionPrometheusQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguage"></a>

```java
public MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference getConditionPrometheusQueryLanguage();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference</a>

---

##### `conditionSql`<sup>Required</sup> <a name="conditionSql" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionSql"></a>

```java
public MonitoringAlertPolicyConditionsConditionSqlOutputReference getConditionSql();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference">MonitoringAlertPolicyConditionsConditionSqlOutputReference</a>

---

##### `conditionThreshold`<sup>Required</sup> <a name="conditionThreshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionThreshold"></a>

```java
public MonitoringAlertPolicyConditionsConditionThresholdOutputReference getConditionThreshold();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference">MonitoringAlertPolicyConditionsConditionThresholdOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `conditionAbsentInput`<sup>Optional</sup> <a name="conditionAbsentInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionAbsentInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionAbsent getConditionAbsentInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a>

---

##### `conditionMatchedLogInput`<sup>Optional</sup> <a name="conditionMatchedLogInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLogInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionMatchedLog getConditionMatchedLogInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a>

---

##### `conditionMonitoringQueryLanguageInput`<sup>Optional</sup> <a name="conditionMonitoringQueryLanguageInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguageInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage getConditionMonitoringQueryLanguageInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---

##### `conditionPrometheusQueryLanguageInput`<sup>Optional</sup> <a name="conditionPrometheusQueryLanguageInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguageInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage getConditionPrometheusQueryLanguageInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---

##### `conditionSqlInput`<sup>Optional</sup> <a name="conditionSqlInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionSqlInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionSql getConditionSqlInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a>

---

##### `conditionThresholdInput`<sup>Optional</sup> <a name="conditionThresholdInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionThresholdInput"></a>

```java
public MonitoringAlertPolicyConditionsConditionThreshold getConditionThresholdInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions">MonitoringAlertPolicyConditions</a>

---


### MonitoringAlertPolicyCreationRecordList <a name="MonitoringAlertPolicyCreationRecordList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyCreationRecordList;

new MonitoringAlertPolicyCreationRecordList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.get"></a>

```java
public MonitoringAlertPolicyCreationRecordOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MonitoringAlertPolicyCreationRecordOutputReference <a name="MonitoringAlertPolicyCreationRecordOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyCreationRecordOutputReference;

new MonitoringAlertPolicyCreationRecordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.mutatedBy">mutatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.mutateTime">mutateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecord">MonitoringAlertPolicyCreationRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mutatedBy`<sup>Required</sup> <a name="mutatedBy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.mutatedBy"></a>

```java
public java.lang.String getMutatedBy();
```

- *Type:* java.lang.String

---

##### `mutateTime`<sup>Required</sup> <a name="mutateTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.mutateTime"></a>

```java
public java.lang.String getMutateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyCreationRecord getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecord">MonitoringAlertPolicyCreationRecord</a>

---


### MonitoringAlertPolicyDocumentationLinksList <a name="MonitoringAlertPolicyDocumentationLinksList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyDocumentationLinksList;

new MonitoringAlertPolicyDocumentationLinksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.get"></a>

```java
public MonitoringAlertPolicyDocumentationLinksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks">MonitoringAlertPolicyDocumentationLinks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks">MonitoringAlertPolicyDocumentationLinks</a>>

---


### MonitoringAlertPolicyDocumentationLinksOutputReference <a name="MonitoringAlertPolicyDocumentationLinksOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyDocumentationLinksOutputReference;

new MonitoringAlertPolicyDocumentationLinksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks">MonitoringAlertPolicyDocumentationLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks">MonitoringAlertPolicyDocumentationLinks</a>

---


### MonitoringAlertPolicyDocumentationOutputReference <a name="MonitoringAlertPolicyDocumentationOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyDocumentationOutputReference;

new MonitoringAlertPolicyDocumentationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.putLinks">putLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetLinks">resetLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetMimeType">resetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetSubject">resetSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinks` <a name="putLinks" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.putLinks"></a>

```java
public void putLinks(IResolvable OR java.util.List<MonitoringAlertPolicyDocumentationLinks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.putLinks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks">MonitoringAlertPolicyDocumentationLinks</a>>

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetLinks` <a name="resetLinks" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetLinks"></a>

```java
public void resetLinks()
```

##### `resetMimeType` <a name="resetMimeType" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetMimeType"></a>

```java
public void resetMimeType()
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetSubject"></a>

```java
public void resetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.links">links</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList">MonitoringAlertPolicyDocumentationLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.linksInput">linksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks">MonitoringAlertPolicyDocumentationLinks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.mimeType">mimeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.links"></a>

```java
public MonitoringAlertPolicyDocumentationLinksList getLinks();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList">MonitoringAlertPolicyDocumentationLinksList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `linksInput`<sup>Optional</sup> <a name="linksInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.linksInput"></a>

```java
public java.lang.Object getLinksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks">MonitoringAlertPolicyDocumentationLinks</a>>

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.mimeTypeInput"></a>

```java
public java.lang.String getMimeTypeInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.mimeType"></a>

```java
public java.lang.String getMimeType();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.internalValue"></a>

```java
public MonitoringAlertPolicyDocumentation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a>

---


### MonitoringAlertPolicyTimeoutsOutputReference <a name="MonitoringAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_alert_policy.MonitoringAlertPolicyTimeoutsOutputReference;

new MonitoringAlertPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a>

---



