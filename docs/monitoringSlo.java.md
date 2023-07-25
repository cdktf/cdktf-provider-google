# `google_monitoring_slo`

Refer to the Terraform Registory for docs: [`google_monitoring_slo`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo).

# `monitoringSlo` Submodule <a name="`monitoringSlo` Submodule" id="@cdktf/provider-google.monitoringSlo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringSlo <a name="MonitoringSlo" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo google_monitoring_slo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSlo;

MonitoringSlo.Builder.create(Construct scope, java.lang.String id)
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
    .goal(java.lang.Number)
    .service(java.lang.String)
//  .basicSli(MonitoringSloBasicSli)
//  .calendarPeriod(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .requestBasedSli(MonitoringSloRequestBasedSli)
//  .rollingPeriodDays(java.lang.Number)
//  .sloId(java.lang.String)
//  .timeouts(MonitoringSloTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .windowsBasedSli(MonitoringSloWindowsBasedSli)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.goal">goal</a></code> | <code>java.lang.Number</code> | The fraction of service that must be good in order for this objective to be met. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | ID of the service to which this SLO belongs. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.basicSli">basicSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a></code> | basic_sli block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.calendarPeriod">calendarPeriod</a></code> | <code>java.lang.String</code> | A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Name used for UI elements listing this SLO. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#id MonitoringSlo#id}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#project MonitoringSlo#project}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.requestBasedSli">requestBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a></code> | request_based_sli block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.rollingPeriodDays">rollingPeriodDays</a></code> | <code>java.lang.Number</code> | A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.sloId">sloId</a></code> | <code>java.lang.String</code> | The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.windowsBasedSli">windowsBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a></code> | windows_based_sli block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.goal"></a>

- *Type:* java.lang.Number

The fraction of service that must be good in order for this objective to be met.

0 < goal <= 0.999

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#goal MonitoringSlo#goal}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.service"></a>

- *Type:* java.lang.String

ID of the service to which this SLO belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#service MonitoringSlo#service}

---

##### `basicSli`<sup>Optional</sup> <a name="basicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.basicSli"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

basic_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#basic_sli MonitoringSlo#basic_sli}

---

##### `calendarPeriod`<sup>Optional</sup> <a name="calendarPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.calendarPeriod"></a>

- *Type:* java.lang.String

A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#calendar_period MonitoringSlo#calendar_period}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Name used for UI elements listing this SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#display_name MonitoringSlo#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#id MonitoringSlo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#project MonitoringSlo#project}.

---

##### `requestBasedSli`<sup>Optional</sup> <a name="requestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.requestBasedSli"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

request_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#request_based_sli MonitoringSlo#request_based_sli}

---

##### `rollingPeriodDays`<sup>Optional</sup> <a name="rollingPeriodDays" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.rollingPeriodDays"></a>

- *Type:* java.lang.Number

A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#rolling_period_days MonitoringSlo#rolling_period_days}

---

##### `sloId`<sup>Optional</sup> <a name="sloId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.sloId"></a>

- *Type:* java.lang.String

The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#slo_id MonitoringSlo#slo_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#timeouts MonitoringSlo#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.userLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#user_labels MonitoringSlo#user_labels}

---

##### `windowsBasedSli`<sup>Optional</sup> <a name="windowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.Initializer.parameter.windowsBasedSli"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

windows_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#windows_based_sli MonitoringSlo#windows_based_sli}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putBasicSli">putBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putRequestBasedSli">putRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.putWindowsBasedSli">putWindowsBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetBasicSli">resetBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetCalendarPeriod">resetCalendarPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRequestBasedSli">resetRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRollingPeriodDays">resetRollingPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetSloId">resetSloId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetUserLabels">resetUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetWindowsBasedSli">resetWindowsBasedSli</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBasicSli` <a name="putBasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putBasicSli"></a>

```java
public void putBasicSli(MonitoringSloBasicSli value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putBasicSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

---

##### `putRequestBasedSli` <a name="putRequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putRequestBasedSli"></a>

```java
public void putRequestBasedSli(MonitoringSloRequestBasedSli value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putRequestBasedSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putTimeouts"></a>

```java
public void putTimeouts(MonitoringSloTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a>

---

##### `putWindowsBasedSli` <a name="putWindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putWindowsBasedSli"></a>

```java
public void putWindowsBasedSli(MonitoringSloWindowsBasedSli value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.putWindowsBasedSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

---

##### `resetBasicSli` <a name="resetBasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetBasicSli"></a>

```java
public void resetBasicSli()
```

##### `resetCalendarPeriod` <a name="resetCalendarPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetCalendarPeriod"></a>

```java
public void resetCalendarPeriod()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetProject"></a>

```java
public void resetProject()
```

##### `resetRequestBasedSli` <a name="resetRequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRequestBasedSli"></a>

```java
public void resetRequestBasedSli()
```

##### `resetRollingPeriodDays` <a name="resetRollingPeriodDays" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetRollingPeriodDays"></a>

```java
public void resetRollingPeriodDays()
```

##### `resetSloId` <a name="resetSloId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetSloId"></a>

```java
public void resetSloId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetUserLabels"></a>

```java
public void resetUserLabels()
```

##### `resetWindowsBasedSli` <a name="resetWindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.resetWindowsBasedSli"></a>

```java
public void resetWindowsBasedSli()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSlo;

MonitoringSlo.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSlo;

MonitoringSlo.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSlo;

MonitoringSlo.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSli">basicSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference">MonitoringSloBasicSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSli">requestBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference">MonitoringSloRequestBasedSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference">MonitoringSloTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSli">windowsBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference">MonitoringSloWindowsBasedSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSliInput">basicSliInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriodInput">calendarPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goalInput">goalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSliInput">requestBasedSliInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDaysInput">rollingPeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloIdInput">sloIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabelsInput">userLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSliInput">windowsBasedSliInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriod">calendarPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goal">goal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDays">rollingPeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloId">sloId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `basicSli`<sup>Required</sup> <a name="basicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSli"></a>

```java
public MonitoringSloBasicSliOutputReference getBasicSli();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference">MonitoringSloBasicSliOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `requestBasedSli`<sup>Required</sup> <a name="requestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSli"></a>

```java
public MonitoringSloRequestBasedSliOutputReference getRequestBasedSli();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference">MonitoringSloRequestBasedSliOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeouts"></a>

```java
public MonitoringSloTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference">MonitoringSloTimeoutsOutputReference</a>

---

##### `windowsBasedSli`<sup>Required</sup> <a name="windowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSli"></a>

```java
public MonitoringSloWindowsBasedSliOutputReference getWindowsBasedSli();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference">MonitoringSloWindowsBasedSliOutputReference</a>

---

##### `basicSliInput`<sup>Optional</sup> <a name="basicSliInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.basicSliInput"></a>

```java
public MonitoringSloBasicSli getBasicSliInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

---

##### `calendarPeriodInput`<sup>Optional</sup> <a name="calendarPeriodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriodInput"></a>

```java
public java.lang.String getCalendarPeriodInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `goalInput`<sup>Optional</sup> <a name="goalInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goalInput"></a>

```java
public java.lang.Number getGoalInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `requestBasedSliInput`<sup>Optional</sup> <a name="requestBasedSliInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.requestBasedSliInput"></a>

```java
public MonitoringSloRequestBasedSli getRequestBasedSliInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

---

##### `rollingPeriodDaysInput`<sup>Optional</sup> <a name="rollingPeriodDaysInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDaysInput"></a>

```java
public java.lang.Number getRollingPeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `sloIdInput`<sup>Optional</sup> <a name="sloIdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloIdInput"></a>

```java
public java.lang.String getSloIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a>

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `windowsBasedSliInput`<sup>Optional</sup> <a name="windowsBasedSliInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.windowsBasedSliInput"></a>

```java
public MonitoringSloWindowsBasedSli getWindowsBasedSliInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

---

##### `calendarPeriod`<sup>Required</sup> <a name="calendarPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.calendarPeriod"></a>

```java
public java.lang.String getCalendarPeriod();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.goal"></a>

```java
public java.lang.Number getGoal();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rollingPeriodDays`<sup>Required</sup> <a name="rollingPeriodDays" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.rollingPeriodDays"></a>

```java
public java.lang.Number getRollingPeriodDays();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `sloId`<sup>Required</sup> <a name="sloId" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.sloId"></a>

```java
public java.lang.String getSloId();
```

- *Type:* java.lang.String

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.monitoringSlo.MonitoringSlo.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringSloBasicSli <a name="MonitoringSloBasicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloBasicSli;

MonitoringSloBasicSli.builder()
//  .availability(MonitoringSloBasicSliAvailability)
//  .latency(MonitoringSloBasicSliLatency)
//  .location(java.util.List<java.lang.String>)
//  .method(java.util.List<java.lang.String>)
//  .version(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a></code> | availability block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of locations to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of RPCs to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.version">version</a></code> | <code>java.util.List<java.lang.String></code> | The set of API versions to which this SLI is relevant. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.availability"></a>

```java
public MonitoringSloBasicSliAvailability getAvailability();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#availability MonitoringSlo#availability}

---

##### `latency`<sup>Optional</sup> <a name="latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.latency"></a>

```java
public MonitoringSloBasicSliLatency getLatency();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#latency MonitoringSlo#latency}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#location MonitoringSlo#location}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#method MonitoringSlo#method}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli.property.version"></a>

```java
public java.util.List<java.lang.String> getVersion();
```

- *Type:* java.util.List<java.lang.String>

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#version MonitoringSlo#version}

---

### MonitoringSloBasicSliAvailability <a name="MonitoringSloBasicSliAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloBasicSliAvailability;

MonitoringSloBasicSliAvailability.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#enabled MonitoringSlo#enabled}

---

### MonitoringSloBasicSliLatency <a name="MonitoringSloBasicSliLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloBasicSliLatency;

MonitoringSloBasicSliLatency.builder()
    .threshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency.property.threshold">threshold</a></code> | <code>java.lang.String</code> | A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#threshold MonitoringSlo#threshold}

---

### MonitoringSloConfig <a name="MonitoringSloConfig" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloConfig;

MonitoringSloConfig.builder()
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
    .goal(java.lang.Number)
    .service(java.lang.String)
//  .basicSli(MonitoringSloBasicSli)
//  .calendarPeriod(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .requestBasedSli(MonitoringSloRequestBasedSli)
//  .rollingPeriodDays(java.lang.Number)
//  .sloId(java.lang.String)
//  .timeouts(MonitoringSloTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .windowsBasedSli(MonitoringSloWindowsBasedSli)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.goal">goal</a></code> | <code>java.lang.Number</code> | The fraction of service that must be good in order for this objective to be met. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.service">service</a></code> | <code>java.lang.String</code> | ID of the service to which this SLO belongs. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.basicSli">basicSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a></code> | basic_sli block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.calendarPeriod">calendarPeriod</a></code> | <code>java.lang.String</code> | A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Name used for UI elements listing this SLO. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#id MonitoringSlo#id}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#project MonitoringSlo#project}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.requestBasedSli">requestBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a></code> | request_based_sli block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.rollingPeriodDays">rollingPeriodDays</a></code> | <code>java.lang.Number</code> | A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.sloId">sloId</a></code> | <code>java.lang.String</code> | The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.windowsBasedSli">windowsBasedSli</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a></code> | windows_based_sli block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.goal"></a>

```java
public java.lang.Number getGoal();
```

- *Type:* java.lang.Number

The fraction of service that must be good in order for this objective to be met.

0 < goal <= 0.999

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#goal MonitoringSlo#goal}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

ID of the service to which this SLO belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#service MonitoringSlo#service}

---

##### `basicSli`<sup>Optional</sup> <a name="basicSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.basicSli"></a>

```java
public MonitoringSloBasicSli getBasicSli();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

basic_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#basic_sli MonitoringSlo#basic_sli}

---

##### `calendarPeriod`<sup>Optional</sup> <a name="calendarPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.calendarPeriod"></a>

```java
public java.lang.String getCalendarPeriod();
```

- *Type:* java.lang.String

A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#calendar_period MonitoringSlo#calendar_period}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Name used for UI elements listing this SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#display_name MonitoringSlo#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#id MonitoringSlo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#project MonitoringSlo#project}.

---

##### `requestBasedSli`<sup>Optional</sup> <a name="requestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.requestBasedSli"></a>

```java
public MonitoringSloRequestBasedSli getRequestBasedSli();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

request_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#request_based_sli MonitoringSlo#request_based_sli}

---

##### `rollingPeriodDays`<sup>Optional</sup> <a name="rollingPeriodDays" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.rollingPeriodDays"></a>

```java
public java.lang.Number getRollingPeriodDays();
```

- *Type:* java.lang.Number

A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#rolling_period_days MonitoringSlo#rolling_period_days}

---

##### `sloId`<sup>Optional</sup> <a name="sloId" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.sloId"></a>

```java
public java.lang.String getSloId();
```

- *Type:* java.lang.String

The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#slo_id MonitoringSlo#slo_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.timeouts"></a>

```java
public MonitoringSloTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#timeouts MonitoringSlo#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#user_labels MonitoringSlo#user_labels}

---

##### `windowsBasedSli`<sup>Optional</sup> <a name="windowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloConfig.property.windowsBasedSli"></a>

```java
public MonitoringSloWindowsBasedSli getWindowsBasedSli();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

windows_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#windows_based_sli MonitoringSlo#windows_based_sli}

---

### MonitoringSloRequestBasedSli <a name="MonitoringSloRequestBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloRequestBasedSli;

MonitoringSloRequestBasedSli.builder()
//  .distributionCut(MonitoringSloRequestBasedSliDistributionCut)
//  .goodTotalRatio(MonitoringSloRequestBasedSliGoodTotalRatio)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.distributionCut">distributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a></code> | distribution_cut block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.goodTotalRatio">goodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a></code> | good_total_ratio block. |

---

##### `distributionCut`<sup>Optional</sup> <a name="distributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.distributionCut"></a>

```java
public MonitoringSloRequestBasedSliDistributionCut getDistributionCut();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#distribution_cut MonitoringSlo#distribution_cut}

---

##### `goodTotalRatio`<sup>Optional</sup> <a name="goodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli.property.goodTotalRatio"></a>

```java
public MonitoringSloRequestBasedSliGoodTotalRatio getGoodTotalRatio();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#good_total_ratio MonitoringSlo#good_total_ratio}

---

### MonitoringSloRequestBasedSliDistributionCut <a name="MonitoringSloRequestBasedSliDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloRequestBasedSliDistributionCut;

MonitoringSloRequestBasedSliDistributionCut.builder()
    .distributionFilter(java.lang.String)
    .range(MonitoringSloRequestBasedSliDistributionCutRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.distributionFilter">distributionFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.range">range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a></code> | range block. |

---

##### `distributionFilter`<sup>Required</sup> <a name="distributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.distributionFilter"></a>

```java
public java.lang.String getDistributionFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#distribution_filter MonitoringSlo#distribution_filter}

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut.property.range"></a>

```java
public MonitoringSloRequestBasedSliDistributionCutRange getRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#range MonitoringSlo#range}

---

### MonitoringSloRequestBasedSliDistributionCutRange <a name="MonitoringSloRequestBasedSliDistributionCutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloRequestBasedSliDistributionCutRange;

MonitoringSloRequestBasedSliDistributionCutRange.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.max">max</a></code> | <code>java.lang.Number</code> | max value for the range (inclusive). If not given, will be set to 0. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.min">min</a></code> | <code>java.lang.Number</code> | Min value for the range (inclusive). If not given, will be set to 0. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#max MonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#min MonitoringSlo#min}

---

### MonitoringSloRequestBasedSliGoodTotalRatio <a name="MonitoringSloRequestBasedSliGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloRequestBasedSliGoodTotalRatio;

MonitoringSloRequestBasedSliGoodTotalRatio.builder()
//  .badServiceFilter(java.lang.String)
//  .goodServiceFilter(java.lang.String)
//  .totalServiceFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.badServiceFilter">badServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.goodServiceFilter">goodServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.totalServiceFilter">totalServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. |

---

##### `badServiceFilter`<sup>Optional</sup> <a name="badServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.badServiceFilter"></a>

```java
public java.lang.String getBadServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#bad_service_filter MonitoringSlo#bad_service_filter}

---

##### `goodServiceFilter`<sup>Optional</sup> <a name="goodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.goodServiceFilter"></a>

```java
public java.lang.String getGoodServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#good_service_filter MonitoringSlo#good_service_filter}

---

##### `totalServiceFilter`<sup>Optional</sup> <a name="totalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio.property.totalServiceFilter"></a>

```java
public java.lang.String getTotalServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#total_service_filter MonitoringSlo#total_service_filter}

---

### MonitoringSloTimeouts <a name="MonitoringSloTimeouts" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloTimeouts;

MonitoringSloTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#create MonitoringSlo#create}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#delete MonitoringSlo#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#update MonitoringSlo#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#create MonitoringSlo#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#delete MonitoringSlo#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#update MonitoringSlo#update}.

---

### MonitoringSloWindowsBasedSli <a name="MonitoringSloWindowsBasedSli" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSli;

MonitoringSloWindowsBasedSli.builder()
//  .goodBadMetricFilter(java.lang.String)
//  .goodTotalRatioThreshold(MonitoringSloWindowsBasedSliGoodTotalRatioThreshold)
//  .metricMeanInRange(MonitoringSloWindowsBasedSliMetricMeanInRange)
//  .metricSumInRange(MonitoringSloWindowsBasedSliMetricSumInRange)
//  .windowPeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodBadMetricFilter">goodBadMetricFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodTotalRatioThreshold">goodTotalRatioThreshold</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | good_total_ratio_threshold block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricMeanInRange">metricMeanInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | metric_mean_in_range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricSumInRange">metricSumInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a></code> | metric_sum_in_range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.windowPeriod">windowPeriod</a></code> | <code>java.lang.String</code> | Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds. |

---

##### `goodBadMetricFilter`<sup>Optional</sup> <a name="goodBadMetricFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodBadMetricFilter"></a>

```java
public java.lang.String getGoodBadMetricFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#good_bad_metric_filter MonitoringSlo#good_bad_metric_filter}

---

##### `goodTotalRatioThreshold`<sup>Optional</sup> <a name="goodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.goodTotalRatioThreshold"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThreshold getGoodTotalRatioThreshold();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

good_total_ratio_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#good_total_ratio_threshold MonitoringSlo#good_total_ratio_threshold}

---

##### `metricMeanInRange`<sup>Optional</sup> <a name="metricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricMeanInRange"></a>

```java
public MonitoringSloWindowsBasedSliMetricMeanInRange getMetricMeanInRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

metric_mean_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#metric_mean_in_range MonitoringSlo#metric_mean_in_range}

---

##### `metricSumInRange`<sup>Optional</sup> <a name="metricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.metricSumInRange"></a>

```java
public MonitoringSloWindowsBasedSliMetricSumInRange getMetricSumInRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

metric_sum_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#metric_sum_in_range MonitoringSlo#metric_sum_in_range}

---

##### `windowPeriod`<sup>Optional</sup> <a name="windowPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli.property.windowPeriod"></a>

```java
public java.lang.String getWindowPeriod();
```

- *Type:* java.lang.String

Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds.

Must be an
integer fraction of a day and at least 60s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#window_period MonitoringSlo#window_period}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThreshold <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold;

MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.builder()
//  .basicSliPerformance(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance)
//  .performance(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.basicSliPerformance">basicSliPerformance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | basic_sli_performance block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.performance">performance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | performance block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | If window performance >= threshold, the window is counted as good. |

---

##### `basicSliPerformance`<sup>Optional</sup> <a name="basicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.basicSliPerformance"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance getBasicSliPerformance();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

basic_sli_performance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#basic_sli_performance MonitoringSlo#basic_sli_performance}

---

##### `performance`<sup>Optional</sup> <a name="performance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.performance"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance getPerformance();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

performance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#performance MonitoringSlo#performance}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

If window performance >= threshold, the window is counted as good.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#threshold MonitoringSlo#threshold}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance;

MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.builder()
//  .availability(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability)
//  .latency(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency)
//  .location(java.util.List<java.lang.String>)
//  .method(java.util.List<java.lang.String>)
//  .version(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | availability block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of locations to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of RPCs to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.version">version</a></code> | <code>java.util.List<java.lang.String></code> | The set of API versions to which this SLI is relevant. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.availability"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability getAvailability();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#availability MonitoringSlo#availability}

---

##### `latency`<sup>Optional</sup> <a name="latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.latency"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency getLatency();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#latency MonitoringSlo#latency}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#location MonitoringSlo#location}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#method MonitoringSlo#method}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.version"></a>

```java
public java.util.List<java.lang.String> getVersion();
```

- *Type:* java.util.List<java.lang.String>

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#version MonitoringSlo#version}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability;

MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#enabled MonitoringSlo#enabled}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency;

MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.builder()
    .threshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.property.threshold">threshold</a></code> | <code>java.lang.String</code> | A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#threshold MonitoringSlo#threshold}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance;

MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.builder()
//  .distributionCut(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut)
//  .goodTotalRatio(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.distributionCut">distributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | distribution_cut block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.goodTotalRatio">goodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | good_total_ratio block. |

---

##### `distributionCut`<sup>Optional</sup> <a name="distributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.distributionCut"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut getDistributionCut();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#distribution_cut MonitoringSlo#distribution_cut}

---

##### `goodTotalRatio`<sup>Optional</sup> <a name="goodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.goodTotalRatio"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio getGoodTotalRatio();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#good_total_ratio MonitoringSlo#good_total_ratio}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut;

MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.builder()
    .distributionFilter(java.lang.String)
    .range(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.distributionFilter">distributionFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.range">range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | range block. |

---

##### `distributionFilter`<sup>Required</sup> <a name="distributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.distributionFilter"></a>

```java
public java.lang.String getDistributionFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#distribution_filter MonitoringSlo#distribution_filter}

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.range"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange getRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#range MonitoringSlo#range}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange;

MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.max">max</a></code> | <code>java.lang.Number</code> | max value for the range (inclusive). If not given, will be set to 0. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.min">min</a></code> | <code>java.lang.Number</code> | Min value for the range (inclusive). If not given, will be set to 0. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#max MonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#min MonitoringSlo#min}

---

### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio;

MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.builder()
//  .badServiceFilter(java.lang.String)
//  .goodServiceFilter(java.lang.String)
//  .totalServiceFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.badServiceFilter">badServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.goodServiceFilter">goodServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.totalServiceFilter">totalServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |

---

##### `badServiceFilter`<sup>Optional</sup> <a name="badServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.badServiceFilter"></a>

```java
public java.lang.String getBadServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#bad_service_filter MonitoringSlo#bad_service_filter}

---

##### `goodServiceFilter`<sup>Optional</sup> <a name="goodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.goodServiceFilter"></a>

```java
public java.lang.String getGoodServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#good_service_filter MonitoringSlo#good_service_filter}

---

##### `totalServiceFilter`<sup>Optional</sup> <a name="totalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.totalServiceFilter"></a>

```java
public java.lang.String getTotalServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#total_service_filter MonitoringSlo#total_service_filter}

---

### MonitoringSloWindowsBasedSliMetricMeanInRange <a name="MonitoringSloWindowsBasedSliMetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliMetricMeanInRange;

MonitoringSloWindowsBasedSliMetricMeanInRange.builder()
    .range(MonitoringSloWindowsBasedSliMetricMeanInRangeRange)
    .timeSeries(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.timeSeries">timeSeries</a></code> | <code>java.lang.String</code> | A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.range"></a>

```java
public MonitoringSloWindowsBasedSliMetricMeanInRangeRange getRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#range MonitoringSlo#range}

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange.property.timeSeries"></a>

```java
public java.lang.String getTimeSeries();
```

- *Type:* java.lang.String

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#time_series MonitoringSlo#time_series}

---

### MonitoringSloWindowsBasedSliMetricMeanInRangeRange <a name="MonitoringSloWindowsBasedSliMetricMeanInRangeRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange;

MonitoringSloWindowsBasedSliMetricMeanInRangeRange.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.max">max</a></code> | <code>java.lang.Number</code> | max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min". |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.min">min</a></code> | <code>java.lang.Number</code> | Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max". |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#max MonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#min MonitoringSlo#min}

---

### MonitoringSloWindowsBasedSliMetricSumInRange <a name="MonitoringSloWindowsBasedSliMetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliMetricSumInRange;

MonitoringSloWindowsBasedSliMetricSumInRange.builder()
    .range(MonitoringSloWindowsBasedSliMetricSumInRangeRange)
    .timeSeries(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.timeSeries">timeSeries</a></code> | <code>java.lang.String</code> | A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.range"></a>

```java
public MonitoringSloWindowsBasedSliMetricSumInRangeRange getRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#range MonitoringSlo#range}

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange.property.timeSeries"></a>

```java
public java.lang.String getTimeSeries();
```

- *Type:* java.lang.String

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.

Summed value 'X' should satisfy
'range.min <= X <= range.max' for a good window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#time_series MonitoringSlo#time_series}

---

### MonitoringSloWindowsBasedSliMetricSumInRangeRange <a name="MonitoringSloWindowsBasedSliMetricSumInRangeRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliMetricSumInRangeRange;

MonitoringSloWindowsBasedSliMetricSumInRangeRange.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.max">max</a></code> | <code>java.lang.Number</code> | max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min". |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.min">min</a></code> | <code>java.lang.Number</code> | Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max". |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#max MonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/monitoring_slo#min MonitoringSlo#min}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringSloBasicSliAvailabilityOutputReference <a name="MonitoringSloBasicSliAvailabilityOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloBasicSliAvailabilityOutputReference;

new MonitoringSloBasicSliAvailabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference.property.internalValue"></a>

```java
public MonitoringSloBasicSliAvailability getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

---


### MonitoringSloBasicSliLatencyOutputReference <a name="MonitoringSloBasicSliLatencyOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloBasicSliLatencyOutputReference;

new MonitoringSloBasicSliLatencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.thresholdInput"></a>

```java
public java.lang.String getThresholdInput();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference.property.internalValue"></a>

```java
public MonitoringSloBasicSliLatency getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

---


### MonitoringSloBasicSliOutputReference <a name="MonitoringSloBasicSliOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloBasicSliOutputReference;

new MonitoringSloBasicSliOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putAvailability">putAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putLatency">putLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLatency">resetLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailability` <a name="putAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putAvailability"></a>

```java
public void putAvailability(MonitoringSloBasicSliAvailability value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putAvailability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

---

##### `putLatency` <a name="putLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putLatency"></a>

```java
public void putLatency(MonitoringSloBasicSliLatency value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.putLatency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

---

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetLatency` <a name="resetLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLatency"></a>

```java
public void resetLatency()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference">MonitoringSloBasicSliAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference">MonitoringSloBasicSliLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availabilityInput">availabilityInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latencyInput">latencyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.locationInput">locationInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.methodInput">methodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.versionInput">versionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.version">version</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availability"></a>

```java
public MonitoringSloBasicSliAvailabilityOutputReference getAvailability();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailabilityOutputReference">MonitoringSloBasicSliAvailabilityOutputReference</a>

---

##### `latency`<sup>Required</sup> <a name="latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latency"></a>

```java
public MonitoringSloBasicSliLatencyOutputReference getLatency();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatencyOutputReference">MonitoringSloBasicSliLatencyOutputReference</a>

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.availabilityInput"></a>

```java
public MonitoringSloBasicSliAvailability getAvailabilityInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliAvailability">MonitoringSloBasicSliAvailability</a>

---

##### `latencyInput`<sup>Optional</sup> <a name="latencyInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.latencyInput"></a>

```java
public MonitoringSloBasicSliLatency getLatencyInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliLatency">MonitoringSloBasicSliLatency</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.locationInput"></a>

```java
public java.util.List<java.lang.String> getLocationInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.methodInput"></a>

```java
public java.util.List<java.lang.String> getMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.versionInput"></a>

```java
public java.util.List<java.lang.String> getVersionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.version"></a>

```java
public java.util.List<java.lang.String> getVersion();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSliOutputReference.property.internalValue"></a>

```java
public MonitoringSloBasicSli getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloBasicSli">MonitoringSloBasicSli</a>

---


### MonitoringSloRequestBasedSliDistributionCutOutputReference <a name="MonitoringSloRequestBasedSliDistributionCutOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloRequestBasedSliDistributionCutOutputReference;

new MonitoringSloRequestBasedSliDistributionCutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.putRange">putRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.putRange"></a>

```java
public void putRange(MonitoringSloRequestBasedSliDistributionCutRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference">MonitoringSloRequestBasedSliDistributionCutRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilterInput">distributionFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilter">distributionFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.range"></a>

```java
public MonitoringSloRequestBasedSliDistributionCutRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference">MonitoringSloRequestBasedSliDistributionCutRangeOutputReference</a>

---

##### `distributionFilterInput`<sup>Optional</sup> <a name="distributionFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilterInput"></a>

```java
public java.lang.String getDistributionFilterInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.rangeInput"></a>

```java
public MonitoringSloRequestBasedSliDistributionCutRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

---

##### `distributionFilter`<sup>Required</sup> <a name="distributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilter"></a>

```java
public java.lang.String getDistributionFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference.property.internalValue"></a>

```java
public MonitoringSloRequestBasedSliDistributionCut getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

---


### MonitoringSloRequestBasedSliDistributionCutRangeOutputReference <a name="MonitoringSloRequestBasedSliDistributionCutRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference;

new MonitoringSloRequestBasedSliDistributionCutRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.internalValue"></a>

```java
public MonitoringSloRequestBasedSliDistributionCutRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutRange">MonitoringSloRequestBasedSliDistributionCutRange</a>

---


### MonitoringSloRequestBasedSliGoodTotalRatioOutputReference <a name="MonitoringSloRequestBasedSliGoodTotalRatioOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference;

new MonitoringSloRequestBasedSliGoodTotalRatioOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetBadServiceFilter">resetBadServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetGoodServiceFilter">resetGoodServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetTotalServiceFilter">resetTotalServiceFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBadServiceFilter` <a name="resetBadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetBadServiceFilter"></a>

```java
public void resetBadServiceFilter()
```

##### `resetGoodServiceFilter` <a name="resetGoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetGoodServiceFilter"></a>

```java
public void resetGoodServiceFilter()
```

##### `resetTotalServiceFilter` <a name="resetTotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetTotalServiceFilter"></a>

```java
public void resetTotalServiceFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilterInput">badServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilterInput">goodServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilterInput">totalServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilter">badServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilter">goodServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilter">totalServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `badServiceFilterInput`<sup>Optional</sup> <a name="badServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilterInput"></a>

```java
public java.lang.String getBadServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `goodServiceFilterInput`<sup>Optional</sup> <a name="goodServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilterInput"></a>

```java
public java.lang.String getGoodServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `totalServiceFilterInput`<sup>Optional</sup> <a name="totalServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilterInput"></a>

```java
public java.lang.String getTotalServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `badServiceFilter`<sup>Required</sup> <a name="badServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilter"></a>

```java
public java.lang.String getBadServiceFilter();
```

- *Type:* java.lang.String

---

##### `goodServiceFilter`<sup>Required</sup> <a name="goodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilter"></a>

```java
public java.lang.String getGoodServiceFilter();
```

- *Type:* java.lang.String

---

##### `totalServiceFilter`<sup>Required</sup> <a name="totalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilter"></a>

```java
public java.lang.String getTotalServiceFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.internalValue"></a>

```java
public MonitoringSloRequestBasedSliGoodTotalRatio getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

---


### MonitoringSloRequestBasedSliOutputReference <a name="MonitoringSloRequestBasedSliOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloRequestBasedSliOutputReference;

new MonitoringSloRequestBasedSliOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putDistributionCut">putDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio">putGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetDistributionCut">resetDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetGoodTotalRatio">resetGoodTotalRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDistributionCut` <a name="putDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putDistributionCut"></a>

```java
public void putDistributionCut(MonitoringSloRequestBasedSliDistributionCut value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putDistributionCut.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

---

##### `putGoodTotalRatio` <a name="putGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio"></a>

```java
public void putGoodTotalRatio(MonitoringSloRequestBasedSliGoodTotalRatio value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

---

##### `resetDistributionCut` <a name="resetDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetDistributionCut"></a>

```java
public void resetDistributionCut()
```

##### `resetGoodTotalRatio` <a name="resetGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.resetGoodTotalRatio"></a>

```java
public void resetGoodTotalRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCut">distributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference">MonitoringSloRequestBasedSliDistributionCutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatio">goodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference">MonitoringSloRequestBasedSliGoodTotalRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCutInput">distributionCutInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatioInput">goodTotalRatioInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `distributionCut`<sup>Required</sup> <a name="distributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCut"></a>

```java
public MonitoringSloRequestBasedSliDistributionCutOutputReference getDistributionCut();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCutOutputReference">MonitoringSloRequestBasedSliDistributionCutOutputReference</a>

---

##### `goodTotalRatio`<sup>Required</sup> <a name="goodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatio"></a>

```java
public MonitoringSloRequestBasedSliGoodTotalRatioOutputReference getGoodTotalRatio();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatioOutputReference">MonitoringSloRequestBasedSliGoodTotalRatioOutputReference</a>

---

##### `distributionCutInput`<sup>Optional</sup> <a name="distributionCutInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.distributionCutInput"></a>

```java
public MonitoringSloRequestBasedSliDistributionCut getDistributionCutInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliDistributionCut">MonitoringSloRequestBasedSliDistributionCut</a>

---

##### `goodTotalRatioInput`<sup>Optional</sup> <a name="goodTotalRatioInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.goodTotalRatioInput"></a>

```java
public MonitoringSloRequestBasedSliGoodTotalRatio getGoodTotalRatioInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliGoodTotalRatio">MonitoringSloRequestBasedSliGoodTotalRatio</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSliOutputReference.property.internalValue"></a>

```java
public MonitoringSloRequestBasedSli getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloRequestBasedSli">MonitoringSloRequestBasedSli</a>

---


### MonitoringSloTimeoutsOutputReference <a name="MonitoringSloTimeoutsOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloTimeoutsOutputReference;

new MonitoringSloTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloTimeouts">MonitoringSloTimeouts</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.thresholdInput"></a>

```java
public java.lang.String getThresholdInput();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability">putAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency">putLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLatency">resetLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailability` <a name="putAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability"></a>

```java
public void putAvailability(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---

##### `putLatency` <a name="putLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency"></a>

```java
public void putLatency(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetLatency` <a name="resetLatency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLatency"></a>

```java
public void resetLatency()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availabilityInput">availabilityInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latencyInput">latencyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.locationInput">locationInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.methodInput">methodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.versionInput">versionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.version">version</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availability"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference getAvailability();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference</a>

---

##### `latency`<sup>Required</sup> <a name="latency" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latency"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference getLatency();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference</a>

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availabilityInput"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability getAvailabilityInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---

##### `latencyInput`<sup>Optional</sup> <a name="latencyInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latencyInput"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency getLatencyInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.locationInput"></a>

```java
public java.util.List<java.lang.String> getLocationInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.methodInput"></a>

```java
public java.util.List<java.lang.String> getMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.versionInput"></a>

```java
public java.util.List<java.lang.String> getVersionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.version"></a>

```java
public java.util.List<java.lang.String> getVersion();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance">putBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance">putPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetBasicSliPerformance">resetBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetPerformance">resetPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicSliPerformance` <a name="putBasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance"></a>

```java
public void putBasicSliPerformance(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---

##### `putPerformance` <a name="putPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance"></a>

```java
public void putPerformance(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---

##### `resetBasicSliPerformance` <a name="resetBasicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetBasicSliPerformance"></a>

```java
public void resetBasicSliPerformance()
```

##### `resetPerformance` <a name="resetPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetPerformance"></a>

```java
public void resetPerformance()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformance">basicSliPerformance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performance">performance</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformanceInput">basicSliPerformanceInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performanceInput">performanceInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicSliPerformance`<sup>Required</sup> <a name="basicSliPerformance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformance"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference getBasicSliPerformance();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference</a>

---

##### `performance`<sup>Required</sup> <a name="performance" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performance"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference getPerformance();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference</a>

---

##### `basicSliPerformanceInput`<sup>Optional</sup> <a name="basicSliPerformanceInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformanceInput"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance getBasicSliPerformanceInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---

##### `performanceInput`<sup>Optional</sup> <a name="performanceInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performanceInput"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance getPerformanceInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThreshold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange">putRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange"></a>

```java
public void putRange(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilterInput">distributionFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilter">distributionFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.range"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference</a>

---

##### `distributionFilterInput`<sup>Optional</sup> <a name="distributionFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilterInput"></a>

```java
public java.lang.String getDistributionFilterInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.rangeInput"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---

##### `distributionFilter`<sup>Required</sup> <a name="distributionFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilter"></a>

```java
public java.lang.String getDistributionFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetBadServiceFilter">resetBadServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetGoodServiceFilter">resetGoodServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetTotalServiceFilter">resetTotalServiceFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBadServiceFilter` <a name="resetBadServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetBadServiceFilter"></a>

```java
public void resetBadServiceFilter()
```

##### `resetGoodServiceFilter` <a name="resetGoodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetGoodServiceFilter"></a>

```java
public void resetGoodServiceFilter()
```

##### `resetTotalServiceFilter` <a name="resetTotalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetTotalServiceFilter"></a>

```java
public void resetTotalServiceFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilterInput">badServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilterInput">goodServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilterInput">totalServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilter">badServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilter">goodServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilter">totalServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `badServiceFilterInput`<sup>Optional</sup> <a name="badServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilterInput"></a>

```java
public java.lang.String getBadServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `goodServiceFilterInput`<sup>Optional</sup> <a name="goodServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilterInput"></a>

```java
public java.lang.String getGoodServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `totalServiceFilterInput`<sup>Optional</sup> <a name="totalServiceFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilterInput"></a>

```java
public java.lang.String getTotalServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `badServiceFilter`<sup>Required</sup> <a name="badServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilter"></a>

```java
public java.lang.String getBadServiceFilter();
```

- *Type:* java.lang.String

---

##### `goodServiceFilter`<sup>Required</sup> <a name="goodServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilter"></a>

```java
public java.lang.String getGoodServiceFilter();
```

- *Type:* java.lang.String

---

##### `totalServiceFilter`<sup>Required</sup> <a name="totalServiceFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilter"></a>

```java
public java.lang.String getTotalServiceFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---


### MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference <a name="MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference;

new MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut">putDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio">putGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetDistributionCut">resetDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetGoodTotalRatio">resetGoodTotalRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDistributionCut` <a name="putDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut"></a>

```java
public void putDistributionCut(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---

##### `putGoodTotalRatio` <a name="putGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio"></a>

```java
public void putGoodTotalRatio(MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---

##### `resetDistributionCut` <a name="resetDistributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetDistributionCut"></a>

```java
public void resetDistributionCut()
```

##### `resetGoodTotalRatio` <a name="resetGoodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetGoodTotalRatio"></a>

```java
public void resetGoodTotalRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCut">distributionCut</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatio">goodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCutInput">distributionCutInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatioInput">goodTotalRatioInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `distributionCut`<sup>Required</sup> <a name="distributionCut" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCut"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference getDistributionCut();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference</a>

---

##### `goodTotalRatio`<sup>Required</sup> <a name="goodTotalRatio" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatio"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference getGoodTotalRatio();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference</a>

---

##### `distributionCutInput`<sup>Optional</sup> <a name="distributionCutInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCutInput"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut getDistributionCutInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---

##### `goodTotalRatioInput`<sup>Optional</sup> <a name="goodTotalRatioInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatioInput"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio getGoodTotalRatioInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---


### MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference;

new MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange">putRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange"></a>

```java
public void putRange(MonitoringSloWindowsBasedSliMetricMeanInRangeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeriesInput">timeSeriesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeries">timeSeries</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.range"></a>

```java
public MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.rangeInput"></a>

```java
public MonitoringSloWindowsBasedSliMetricMeanInRangeRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeriesInput"></a>

```java
public java.lang.String getTimeSeriesInput();
```

- *Type:* java.lang.String

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeries"></a>

```java
public java.lang.String getTimeSeries();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliMetricMeanInRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

---


### MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference;

new MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliMetricMeanInRangeRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeRange">MonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---


### MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference;

new MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange">putRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange"></a>

```java
public void putRange(MonitoringSloWindowsBasedSliMetricSumInRangeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeriesInput">timeSeriesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeries">timeSeries</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.range"></a>

```java
public MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.rangeInput"></a>

```java
public MonitoringSloWindowsBasedSliMetricSumInRangeRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeriesInput"></a>

```java
public java.lang.String getTimeSeriesInput();
```

- *Type:* java.lang.String

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeries"></a>

```java
public java.lang.String getTimeSeries();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliMetricSumInRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

---


### MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference <a name="MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference;

new MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSliMetricSumInRangeRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeRange">MonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---


### MonitoringSloWindowsBasedSliOutputReference <a name="MonitoringSloWindowsBasedSliOutputReference" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_slo.MonitoringSloWindowsBasedSliOutputReference;

new MonitoringSloWindowsBasedSliOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold">putGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange">putMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange">putMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodBadMetricFilter">resetGoodBadMetricFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodTotalRatioThreshold">resetGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricMeanInRange">resetMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricSumInRange">resetMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetWindowPeriod">resetWindowPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoodTotalRatioThreshold` <a name="putGoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold"></a>

```java
public void putGoodTotalRatioThreshold(MonitoringSloWindowsBasedSliGoodTotalRatioThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---

##### `putMetricMeanInRange` <a name="putMetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange"></a>

```java
public void putMetricMeanInRange(MonitoringSloWindowsBasedSliMetricMeanInRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

---

##### `putMetricSumInRange` <a name="putMetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange"></a>

```java
public void putMetricSumInRange(MonitoringSloWindowsBasedSliMetricSumInRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

---

##### `resetGoodBadMetricFilter` <a name="resetGoodBadMetricFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodBadMetricFilter"></a>

```java
public void resetGoodBadMetricFilter()
```

##### `resetGoodTotalRatioThreshold` <a name="resetGoodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetGoodTotalRatioThreshold"></a>

```java
public void resetGoodTotalRatioThreshold()
```

##### `resetMetricMeanInRange` <a name="resetMetricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricMeanInRange"></a>

```java
public void resetMetricMeanInRange()
```

##### `resetMetricSumInRange` <a name="resetMetricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetMetricSumInRange"></a>

```java
public void resetMetricSumInRange()
```

##### `resetWindowPeriod` <a name="resetWindowPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.resetWindowPeriod"></a>

```java
public void resetWindowPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThreshold">goodTotalRatioThreshold</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRange">metricMeanInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRange">metricSumInRange</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilterInput">goodBadMetricFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThresholdInput">goodTotalRatioThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRangeInput">metricMeanInRangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRangeInput">metricSumInRangeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriodInput">windowPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilter">goodBadMetricFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriod">windowPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `goodTotalRatioThreshold`<sup>Required</sup> <a name="goodTotalRatioThreshold" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThreshold"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference getGoodTotalRatioThreshold();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference">MonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference</a>

---

##### `metricMeanInRange`<sup>Required</sup> <a name="metricMeanInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRange"></a>

```java
public MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference getMetricMeanInRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference">MonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference</a>

---

##### `metricSumInRange`<sup>Required</sup> <a name="metricSumInRange" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRange"></a>

```java
public MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference getMetricSumInRange();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference">MonitoringSloWindowsBasedSliMetricSumInRangeOutputReference</a>

---

##### `goodBadMetricFilterInput`<sup>Optional</sup> <a name="goodBadMetricFilterInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilterInput"></a>

```java
public java.lang.String getGoodBadMetricFilterInput();
```

- *Type:* java.lang.String

---

##### `goodTotalRatioThresholdInput`<sup>Optional</sup> <a name="goodTotalRatioThresholdInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThresholdInput"></a>

```java
public MonitoringSloWindowsBasedSliGoodTotalRatioThreshold getGoodTotalRatioThresholdInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliGoodTotalRatioThreshold">MonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---

##### `metricMeanInRangeInput`<sup>Optional</sup> <a name="metricMeanInRangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRangeInput"></a>

```java
public MonitoringSloWindowsBasedSliMetricMeanInRange getMetricMeanInRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricMeanInRange">MonitoringSloWindowsBasedSliMetricMeanInRange</a>

---

##### `metricSumInRangeInput`<sup>Optional</sup> <a name="metricSumInRangeInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.metricSumInRangeInput"></a>

```java
public MonitoringSloWindowsBasedSliMetricSumInRange getMetricSumInRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliMetricSumInRange">MonitoringSloWindowsBasedSliMetricSumInRange</a>

---

##### `windowPeriodInput`<sup>Optional</sup> <a name="windowPeriodInput" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriodInput"></a>

```java
public java.lang.String getWindowPeriodInput();
```

- *Type:* java.lang.String

---

##### `goodBadMetricFilter`<sup>Required</sup> <a name="goodBadMetricFilter" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilter"></a>

```java
public java.lang.String getGoodBadMetricFilter();
```

- *Type:* java.lang.String

---

##### `windowPeriod`<sup>Required</sup> <a name="windowPeriod" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.windowPeriod"></a>

```java
public java.lang.String getWindowPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSliOutputReference.property.internalValue"></a>

```java
public MonitoringSloWindowsBasedSli getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringSlo.MonitoringSloWindowsBasedSli">MonitoringSloWindowsBasedSli</a>

---



