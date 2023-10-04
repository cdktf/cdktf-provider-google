# `google_dns_managed_zone`

Refer to the Terraform Registory for docs: [`google_dns_managed_zone`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone).

# `dnsManagedZone` Submodule <a name="`dnsManagedZone` Submodule" id="@cdktf/provider-google.dnsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsManagedZone <a name="DnsManagedZone" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone google_dns_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZone;

DnsManagedZone.Builder.create(Construct scope, java.lang.String id)
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
    .dnsName(java.lang.String)
    .name(java.lang.String)
//  .cloudLoggingConfig(DnsManagedZoneCloudLoggingConfig)
//  .description(java.lang.String)
//  .dnssecConfig(DnsManagedZoneDnssecConfig)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .forwardingConfig(DnsManagedZoneForwardingConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .peeringConfig(DnsManagedZonePeeringConfig)
//  .privateVisibilityConfig(DnsManagedZonePrivateVisibilityConfig)
//  .project(java.lang.String)
//  .timeouts(DnsManagedZoneTimeouts)
//  .visibility(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dnsName">dnsName</a></code> | <code>java.lang.String</code> | The DNS name of this managed zone, for instance "example.com.". |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | User assigned name for this resource. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.cloudLoggingConfig">cloudLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | cloud_logging_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dnssecConfig">dnssecConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | dnssec_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set this true to delete all records in the zone. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forwardingConfig">forwardingConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | forwarding_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#id DnsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this ManagedZone. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.peeringConfig">peeringConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | peering_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.privateVisibilityConfig">privateVisibilityConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | private_visibility_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#project DnsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dnsName"></a>

- *Type:* java.lang.String

The DNS name of this managed zone, for instance "example.com.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#dns_name DnsManagedZone#dns_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.name"></a>

- *Type:* java.lang.String

User assigned name for this resource. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#name DnsManagedZone#name}

---

##### `cloudLoggingConfig`<sup>Optional</sup> <a name="cloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.cloudLoggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

cloud_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#cloud_logging_config DnsManagedZone#cloud_logging_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#description DnsManagedZone#description}

---

##### `dnssecConfig`<sup>Optional</sup> <a name="dnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.dnssecConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

dnssec_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#dnssec_config DnsManagedZone#dnssec_config}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set this true to delete all records in the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#force_destroy DnsManagedZone#force_destroy}

---

##### `forwardingConfig`<sup>Optional</sup> <a name="forwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.forwardingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

forwarding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#forwarding_config DnsManagedZone#forwarding_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#id DnsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this ManagedZone.

*Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#labels DnsManagedZone#labels}

---

##### `peeringConfig`<sup>Optional</sup> <a name="peeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.peeringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#peering_config DnsManagedZone#peering_config}

---

##### `privateVisibilityConfig`<sup>Optional</sup> <a name="privateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.privateVisibilityConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

private_visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#private_visibility_config DnsManagedZone#private_visibility_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#project DnsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#timeouts DnsManagedZone#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

Default value: "public" Possible values: ["private", "public"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#visibility DnsManagedZone#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig">putCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig">putDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig">putForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig">putPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig">putPrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetCloudLoggingConfig">resetCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDnssecConfig">resetDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForwardingConfig">resetForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPeeringConfig">resetPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPrivateVisibilityConfig">resetPrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCloudLoggingConfig` <a name="putCloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig"></a>

```java
public void putCloudLoggingConfig(DnsManagedZoneCloudLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putCloudLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---

##### `putDnssecConfig` <a name="putDnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig"></a>

```java
public void putDnssecConfig(DnsManagedZoneDnssecConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putDnssecConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---

##### `putForwardingConfig` <a name="putForwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig"></a>

```java
public void putForwardingConfig(DnsManagedZoneForwardingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putForwardingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---

##### `putPeeringConfig` <a name="putPeeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig"></a>

```java
public void putPeeringConfig(DnsManagedZonePeeringConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---

##### `putPrivateVisibilityConfig` <a name="putPrivateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig"></a>

```java
public void putPrivateVisibilityConfig(DnsManagedZonePrivateVisibilityConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putPrivateVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts"></a>

```java
public void putTimeouts(DnsManagedZoneTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

---

##### `resetCloudLoggingConfig` <a name="resetCloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetCloudLoggingConfig"></a>

```java
public void resetCloudLoggingConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDnssecConfig` <a name="resetDnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetDnssecConfig"></a>

```java
public void resetDnssecConfig()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetForwardingConfig` <a name="resetForwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetForwardingConfig"></a>

```java
public void resetForwardingConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPeeringConfig` <a name="resetPeeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPeeringConfig"></a>

```java
public void resetPeeringConfig()
```

##### `resetPrivateVisibilityConfig` <a name="resetPrivateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetPrivateVisibilityConfig"></a>

```java
public void resetPrivateVisibilityConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.resetVisibility"></a>

```java
public void resetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZone;

DnsManagedZone.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZone;

DnsManagedZone.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZone;

DnsManagedZone.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfig">cloudLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference">DnsManagedZoneCloudLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfig">dnssecConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference">DnsManagedZoneDnssecConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfig">forwardingConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference">DnsManagedZoneForwardingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.managedZoneId">managedZoneId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameServers">nameServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfig">peeringConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference">DnsManagedZonePeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfig">privateVisibilityConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference">DnsManagedZonePrivateVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference">DnsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfigInput">cloudLoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsNameInput">dnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfigInput">dnssecConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfigInput">forwardingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfigInput">peeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfigInput">privateVisibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudLoggingConfig`<sup>Required</sup> <a name="cloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfig"></a>

```java
public DnsManagedZoneCloudLoggingConfigOutputReference getCloudLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference">DnsManagedZoneCloudLoggingConfigOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `dnssecConfig`<sup>Required</sup> <a name="dnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfig"></a>

```java
public DnsManagedZoneDnssecConfigOutputReference getDnssecConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference">DnsManagedZoneDnssecConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `forwardingConfig`<sup>Required</sup> <a name="forwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfig"></a>

```java
public DnsManagedZoneForwardingConfigOutputReference getForwardingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference">DnsManagedZoneForwardingConfigOutputReference</a>

---

##### `managedZoneId`<sup>Required</sup> <a name="managedZoneId" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.managedZoneId"></a>

```java
public java.lang.Number getManagedZoneId();
```

- *Type:* java.lang.Number

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameServers"></a>

```java
public java.util.List<java.lang.String> getNameServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peeringConfig`<sup>Required</sup> <a name="peeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfig"></a>

```java
public DnsManagedZonePeeringConfigOutputReference getPeeringConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference">DnsManagedZonePeeringConfigOutputReference</a>

---

##### `privateVisibilityConfig`<sup>Required</sup> <a name="privateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfig"></a>

```java
public DnsManagedZonePrivateVisibilityConfigOutputReference getPrivateVisibilityConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference">DnsManagedZonePrivateVisibilityConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeouts"></a>

```java
public DnsManagedZoneTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference">DnsManagedZoneTimeoutsOutputReference</a>

---

##### `cloudLoggingConfigInput`<sup>Optional</sup> <a name="cloudLoggingConfigInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.cloudLoggingConfigInput"></a>

```java
public DnsManagedZoneCloudLoggingConfig getCloudLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsNameInput"></a>

```java
public java.lang.String getDnsNameInput();
```

- *Type:* java.lang.String

---

##### `dnssecConfigInput`<sup>Optional</sup> <a name="dnssecConfigInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnssecConfigInput"></a>

```java
public DnsManagedZoneDnssecConfig getDnssecConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardingConfigInput`<sup>Optional</sup> <a name="forwardingConfigInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forwardingConfigInput"></a>

```java
public DnsManagedZoneForwardingConfig getForwardingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peeringConfigInput`<sup>Optional</sup> <a name="peeringConfigInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.peeringConfigInput"></a>

```java
public DnsManagedZonePeeringConfig getPeeringConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---

##### `privateVisibilityConfigInput`<sup>Optional</sup> <a name="privateVisibilityConfigInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.privateVisibilityConfigInput"></a>

```java
public DnsManagedZonePrivateVisibilityConfig getPrivateVisibilityConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZone.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsManagedZoneCloudLoggingConfig <a name="DnsManagedZoneCloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneCloudLoggingConfig;

DnsManagedZoneCloudLoggingConfig.builder()
    .enableLogging(java.lang.Boolean)
    .enableLogging(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, enable query logging for this ManagedZone. False by default, making logging opt-in. |

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, enable query logging for this ManagedZone. False by default, making logging opt-in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#enable_logging DnsManagedZone#enable_logging}

---

### DnsManagedZoneConfig <a name="DnsManagedZoneConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneConfig;

DnsManagedZoneConfig.builder()
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
    .dnsName(java.lang.String)
    .name(java.lang.String)
//  .cloudLoggingConfig(DnsManagedZoneCloudLoggingConfig)
//  .description(java.lang.String)
//  .dnssecConfig(DnsManagedZoneDnssecConfig)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .forwardingConfig(DnsManagedZoneForwardingConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .peeringConfig(DnsManagedZonePeeringConfig)
//  .privateVisibilityConfig(DnsManagedZonePrivateVisibilityConfig)
//  .project(java.lang.String)
//  .timeouts(DnsManagedZoneTimeouts)
//  .visibility(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | The DNS name of this managed zone, for instance "example.com.". |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.name">name</a></code> | <code>java.lang.String</code> | User assigned name for this resource. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.cloudLoggingConfig">cloudLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | cloud_logging_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.description">description</a></code> | <code>java.lang.String</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnssecConfig">dnssecConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | dnssec_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set this true to delete all records in the zone. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forwardingConfig">forwardingConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | forwarding_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#id DnsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to this ManagedZone. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.peeringConfig">peeringConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | peering_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.privateVisibilityConfig">privateVisibilityConfig</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | private_visibility_config block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#project DnsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

The DNS name of this managed zone, for instance "example.com.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#dns_name DnsManagedZone#dns_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

User assigned name for this resource. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#name DnsManagedZone#name}

---

##### `cloudLoggingConfig`<sup>Optional</sup> <a name="cloudLoggingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.cloudLoggingConfig"></a>

```java
public DnsManagedZoneCloudLoggingConfig getCloudLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

cloud_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#cloud_logging_config DnsManagedZone#cloud_logging_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#description DnsManagedZone#description}

---

##### `dnssecConfig`<sup>Optional</sup> <a name="dnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.dnssecConfig"></a>

```java
public DnsManagedZoneDnssecConfig getDnssecConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

dnssec_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#dnssec_config DnsManagedZone#dnssec_config}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set this true to delete all records in the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#force_destroy DnsManagedZone#force_destroy}

---

##### `forwardingConfig`<sup>Optional</sup> <a name="forwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.forwardingConfig"></a>

```java
public DnsManagedZoneForwardingConfig getForwardingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

forwarding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#forwarding_config DnsManagedZone#forwarding_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#id DnsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to this ManagedZone.

*Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#labels DnsManagedZone#labels}

---

##### `peeringConfig`<sup>Optional</sup> <a name="peeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.peeringConfig"></a>

```java
public DnsManagedZonePeeringConfig getPeeringConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#peering_config DnsManagedZone#peering_config}

---

##### `privateVisibilityConfig`<sup>Optional</sup> <a name="privateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.privateVisibilityConfig"></a>

```java
public DnsManagedZonePrivateVisibilityConfig getPrivateVisibilityConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

private_visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#private_visibility_config DnsManagedZone#private_visibility_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#project DnsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.timeouts"></a>

```java
public DnsManagedZoneTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#timeouts DnsManagedZone#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

Default value: "public" Possible values: ["private", "public"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#visibility DnsManagedZone#visibility}

---

### DnsManagedZoneDnssecConfig <a name="DnsManagedZoneDnssecConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneDnssecConfig;

DnsManagedZoneDnssecConfig.builder()
//  .defaultKeySpecs(IResolvable)
//  .defaultKeySpecs(java.util.List<DnsManagedZoneDnssecConfigDefaultKeySpecs>)
//  .kind(java.lang.String)
//  .nonExistence(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.defaultKeySpecs">defaultKeySpecs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>></code> | default_key_specs block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Identifies what kind of resource this is. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.nonExistence">nonExistence</a></code> | <code>java.lang.String</code> | Specifies the mechanism used to provide authenticated denial-of-existence responses. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.state">state</a></code> | <code>java.lang.String</code> | Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]. |

---

##### `defaultKeySpecs`<sup>Optional</sup> <a name="defaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.defaultKeySpecs"></a>

```java
public java.lang.Object getDefaultKeySpecs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>>

default_key_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#default_key_specs DnsManagedZone#default_key_specs}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#kind DnsManagedZone#kind}

---

##### `nonExistence`<sup>Optional</sup> <a name="nonExistence" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.nonExistence"></a>

```java
public java.lang.String getNonExistence();
```

- *Type:* java.lang.String

Specifies the mechanism used to provide authenticated denial-of-existence responses.

non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#non_existence DnsManagedZone#non_existence}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#state DnsManagedZone#state}

---

### DnsManagedZoneDnssecConfigDefaultKeySpecs <a name="DnsManagedZoneDnssecConfigDefaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneDnssecConfigDefaultKeySpecs;

DnsManagedZoneDnssecConfigDefaultKeySpecs.builder()
//  .algorithm(java.lang.String)
//  .keyLength(java.lang.Number)
//  .keyType(java.lang.String)
//  .kind(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength">keyLength</a></code> | <code>java.lang.Number</code> | Length of the keys in bits. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType">keyType</a></code> | <code>java.lang.String</code> | Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind">kind</a></code> | <code>java.lang.String</code> | Identifies what kind of resource this is. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#algorithm DnsManagedZone#algorithm}

---

##### `keyLength`<sup>Optional</sup> <a name="keyLength" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength"></a>

```java
public java.lang.Number getKeyLength();
```

- *Type:* java.lang.Number

Length of the keys in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#key_length DnsManagedZone#key_length}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK).

Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#key_type DnsManagedZone#key_type}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#kind DnsManagedZone#kind}

---

### DnsManagedZoneForwardingConfig <a name="DnsManagedZoneForwardingConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneForwardingConfig;

DnsManagedZoneForwardingConfig.builder()
    .targetNameServers(IResolvable)
    .targetNameServers(java.util.List<DnsManagedZoneForwardingConfigTargetNameServers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.property.targetNameServers">targetNameServers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>></code> | target_name_servers block. |

---

##### `targetNameServers`<sup>Required</sup> <a name="targetNameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig.property.targetNameServers"></a>

```java
public java.lang.Object getTargetNameServers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>>

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#target_name_servers DnsManagedZone#target_name_servers}

---

### DnsManagedZoneForwardingConfigTargetNameServers <a name="DnsManagedZoneForwardingConfigTargetNameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneForwardingConfigTargetNameServers;

DnsManagedZoneForwardingConfigTargetNameServers.builder()
    .ipv4Address(java.lang.String)
//  .forwardingPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | IPv4 address of a target name server. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath">forwardingPath</a></code> | <code>java.lang.String</code> | Forwarding path for this TargetNameServer. |

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

IPv4 address of a target name server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#ipv4_address DnsManagedZone#ipv4_address}

---

##### `forwardingPath`<sup>Optional</sup> <a name="forwardingPath" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath"></a>

```java
public java.lang.String getForwardingPath();
```

- *Type:* java.lang.String

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#forwarding_path DnsManagedZone#forwarding_path}

---

### DnsManagedZonePeeringConfig <a name="DnsManagedZonePeeringConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePeeringConfig;

DnsManagedZonePeeringConfig.builder()
    .targetNetwork(DnsManagedZonePeeringConfigTargetNetwork)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.property.targetNetwork">targetNetwork</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | target_network block. |

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig.property.targetNetwork"></a>

```java
public DnsManagedZonePeeringConfigTargetNetwork getTargetNetwork();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

target_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#target_network DnsManagedZone#target_network}

---

### DnsManagedZonePeeringConfigTargetNetwork <a name="DnsManagedZonePeeringConfigTargetNetwork" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePeeringConfigTargetNetwork;

DnsManagedZonePeeringConfigTargetNetwork.builder()
    .networkUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#network_url DnsManagedZone#network_url}

---

### DnsManagedZonePrivateVisibilityConfig <a name="DnsManagedZonePrivateVisibilityConfig" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePrivateVisibilityConfig;

DnsManagedZonePrivateVisibilityConfig.builder()
//  .gkeClusters(IResolvable)
//  .gkeClusters(java.util.List<DnsManagedZonePrivateVisibilityConfigGkeClusters>)
//  .networks(IResolvable)
//  .networks(java.util.List<DnsManagedZonePrivateVisibilityConfigNetworks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.gkeClusters">gkeClusters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>></code> | gke_clusters block. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.networks">networks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>></code> | networks block. |

---

##### `gkeClusters`<sup>Optional</sup> <a name="gkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.gkeClusters"></a>

```java
public java.lang.Object getGkeClusters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>>

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#gke_clusters DnsManagedZone#gke_clusters}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig.property.networks"></a>

```java
public java.lang.Object getNetworks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>>

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#networks DnsManagedZone#networks}

---

### DnsManagedZonePrivateVisibilityConfigGkeClusters <a name="DnsManagedZonePrivateVisibilityConfigGkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePrivateVisibilityConfigGkeClusters;

DnsManagedZonePrivateVisibilityConfigGkeClusters.builder()
    .gkeClusterName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName">gkeClusterName</a></code> | <code>java.lang.String</code> | The resource name of the cluster to bind this ManagedZone to. |

---

##### `gkeClusterName`<sup>Required</sup> <a name="gkeClusterName" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName"></a>

```java
public java.lang.String getGkeClusterName();
```

- *Type:* java.lang.String

The resource name of the cluster to bind this ManagedZone to.

This should be specified in the format like
'projects/* /locations/* /clusters/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#gke_cluster_name DnsManagedZone#gke_cluster_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DnsManagedZonePrivateVisibilityConfigNetworks <a name="DnsManagedZonePrivateVisibilityConfigNetworks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePrivateVisibilityConfigNetworks;

DnsManagedZonePrivateVisibilityConfigNetworks.builder()
    .networkUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#network_url DnsManagedZone#network_url}

---

### DnsManagedZoneTimeouts <a name="DnsManagedZoneTimeouts" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneTimeouts;

DnsManagedZoneTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#create DnsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#delete DnsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#update DnsManagedZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#create DnsManagedZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#delete DnsManagedZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/dns_managed_zone#update DnsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsManagedZoneCloudLoggingConfigOutputReference <a name="DnsManagedZoneCloudLoggingConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneCloudLoggingConfigOutputReference;

new DnsManagedZoneCloudLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput">enableLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput"></a>

```java
public java.lang.Object getEnableLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue"></a>

```java
public DnsManagedZoneCloudLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneCloudLoggingConfig">DnsManagedZoneCloudLoggingConfig</a>

---


### DnsManagedZoneDnssecConfigDefaultKeySpecsList <a name="DnsManagedZoneDnssecConfigDefaultKeySpecsList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneDnssecConfigDefaultKeySpecsList;

new DnsManagedZoneDnssecConfigDefaultKeySpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get"></a>

```java
public DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>>

---


### DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference <a name="DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference;

new DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength">resetKeyLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind">resetKind</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetKeyLength` <a name="resetKeyLength" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength"></a>

```java
public void resetKeyLength()
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType"></a>

```java
public void resetKeyType()
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind"></a>

```java
public void resetKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput">keyLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength">keyLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `keyLengthInput`<sup>Optional</sup> <a name="keyLengthInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput"></a>

```java
public java.lang.Number getKeyLengthInput();
```

- *Type:* java.lang.Number

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `keyLength`<sup>Required</sup> <a name="keyLength" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength"></a>

```java
public java.lang.Number getKeyLength();
```

- *Type:* java.lang.Number

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>

---


### DnsManagedZoneDnssecConfigOutputReference <a name="DnsManagedZoneDnssecConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneDnssecConfigOutputReference;

new DnsManagedZoneDnssecConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs">putDefaultKeySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs">resetDefaultKeySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetNonExistence">resetNonExistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultKeySpecs` <a name="putDefaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs"></a>

```java
public void putDefaultKeySpecs(IResolvable OR java.util.List<DnsManagedZoneDnssecConfigDefaultKeySpecs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>>

---

##### `resetDefaultKeySpecs` <a name="resetDefaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs"></a>

```java
public void resetDefaultKeySpecs()
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetKind"></a>

```java
public void resetKind()
```

##### `resetNonExistence` <a name="resetNonExistence" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetNonExistence"></a>

```java
public void resetNonExistence()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs">defaultKeySpecs</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList">DnsManagedZoneDnssecConfigDefaultKeySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput">defaultKeySpecsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput">nonExistenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistence">nonExistence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultKeySpecs`<sup>Required</sup> <a name="defaultKeySpecs" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs"></a>

```java
public DnsManagedZoneDnssecConfigDefaultKeySpecsList getDefaultKeySpecs();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecsList">DnsManagedZoneDnssecConfigDefaultKeySpecsList</a>

---

##### `defaultKeySpecsInput`<sup>Optional</sup> <a name="defaultKeySpecsInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput"></a>

```java
public java.lang.Object getDefaultKeySpecsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigDefaultKeySpecs">DnsManagedZoneDnssecConfigDefaultKeySpecs</a>>

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nonExistenceInput`<sup>Optional</sup> <a name="nonExistenceInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput"></a>

```java
public java.lang.String getNonExistenceInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `nonExistence`<sup>Required</sup> <a name="nonExistence" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.nonExistence"></a>

```java
public java.lang.String getNonExistence();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfigOutputReference.property.internalValue"></a>

```java
public DnsManagedZoneDnssecConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneDnssecConfig">DnsManagedZoneDnssecConfig</a>

---


### DnsManagedZoneForwardingConfigOutputReference <a name="DnsManagedZoneForwardingConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneForwardingConfigOutputReference;

new DnsManagedZoneForwardingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers">putTargetNameServers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetNameServers` <a name="putTargetNameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers"></a>

```java
public void putTargetNameServers(IResolvable OR java.util.List<DnsManagedZoneForwardingConfigTargetNameServers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServers">targetNameServers</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList">DnsManagedZoneForwardingConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput">targetNameServersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetNameServers`<sup>Required</sup> <a name="targetNameServers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServers"></a>

```java
public DnsManagedZoneForwardingConfigTargetNameServersList getTargetNameServers();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList">DnsManagedZoneForwardingConfigTargetNameServersList</a>

---

##### `targetNameServersInput`<sup>Optional</sup> <a name="targetNameServersInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput"></a>

```java
public java.lang.Object getTargetNameServersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigOutputReference.property.internalValue"></a>

```java
public DnsManagedZoneForwardingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfig">DnsManagedZoneForwardingConfig</a>

---


### DnsManagedZoneForwardingConfigTargetNameServersList <a name="DnsManagedZoneForwardingConfigTargetNameServersList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneForwardingConfigTargetNameServersList;

new DnsManagedZoneForwardingConfigTargetNameServersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get"></a>

```java
public DnsManagedZoneForwardingConfigTargetNameServersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>>

---


### DnsManagedZoneForwardingConfigTargetNameServersOutputReference <a name="DnsManagedZoneForwardingConfigTargetNameServersOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference;

new DnsManagedZoneForwardingConfigTargetNameServersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath">resetForwardingPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForwardingPath` <a name="resetForwardingPath" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```java
public void resetForwardingPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput">forwardingPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath">forwardingPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forwardingPathInput`<sup>Optional</sup> <a name="forwardingPathInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```java
public java.lang.String getForwardingPathInput();
```

- *Type:* java.lang.String

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```java
public java.lang.String getIpv4AddressInput();
```

- *Type:* java.lang.String

---

##### `forwardingPath`<sup>Required</sup> <a name="forwardingPath" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```java
public java.lang.String getForwardingPath();
```

- *Type:* java.lang.String

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneForwardingConfigTargetNameServers">DnsManagedZoneForwardingConfigTargetNameServers</a>

---


### DnsManagedZonePeeringConfigOutputReference <a name="DnsManagedZonePeeringConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePeeringConfigOutputReference;

new DnsManagedZonePeeringConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork">putTargetNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetNetwork` <a name="putTargetNetwork" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork"></a>

```java
public void putTargetNetwork(DnsManagedZonePeeringConfigTargetNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.putTargetNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetwork">targetNetwork</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference">DnsManagedZonePeeringConfigTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput">targetNetworkInput</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetwork"></a>

```java
public DnsManagedZonePeeringConfigTargetNetworkOutputReference getTargetNetwork();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference">DnsManagedZonePeeringConfigTargetNetworkOutputReference</a>

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput"></a>

```java
public DnsManagedZonePeeringConfigTargetNetwork getTargetNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigOutputReference.property.internalValue"></a>

```java
public DnsManagedZonePeeringConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfig">DnsManagedZonePeeringConfig</a>

---


### DnsManagedZonePeeringConfigTargetNetworkOutputReference <a name="DnsManagedZonePeeringConfigTargetNetworkOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePeeringConfigTargetNetworkOutputReference;

new DnsManagedZonePeeringConfigTargetNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput"></a>

```java
public java.lang.String getNetworkUrlInput();
```

- *Type:* java.lang.String

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue"></a>

```java
public DnsManagedZonePeeringConfigTargetNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePeeringConfigTargetNetwork">DnsManagedZonePeeringConfigTargetNetwork</a>

---


### DnsManagedZonePrivateVisibilityConfigGkeClustersList <a name="DnsManagedZonePrivateVisibilityConfigGkeClustersList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePrivateVisibilityConfigGkeClustersList;

new DnsManagedZonePrivateVisibilityConfigGkeClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get"></a>

```java
public DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>>

---


### DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference <a name="DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference;

new DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput">gkeClusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName">gkeClusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gkeClusterNameInput`<sup>Optional</sup> <a name="gkeClusterNameInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```java
public java.lang.String getGkeClusterNameInput();
```

- *Type:* java.lang.String

---

##### `gkeClusterName`<sup>Required</sup> <a name="gkeClusterName" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName"></a>

```java
public java.lang.String getGkeClusterName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>

---


### DnsManagedZonePrivateVisibilityConfigNetworksList <a name="DnsManagedZonePrivateVisibilityConfigNetworksList" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePrivateVisibilityConfigNetworksList;

new DnsManagedZonePrivateVisibilityConfigNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get"></a>

```java
public DnsManagedZonePrivateVisibilityConfigNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>>

---


### DnsManagedZonePrivateVisibilityConfigNetworksOutputReference <a name="DnsManagedZonePrivateVisibilityConfigNetworksOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference;

new DnsManagedZonePrivateVisibilityConfigNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput"></a>

```java
public java.lang.String getNetworkUrlInput();
```

- *Type:* java.lang.String

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>

---


### DnsManagedZonePrivateVisibilityConfigOutputReference <a name="DnsManagedZonePrivateVisibilityConfigOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZonePrivateVisibilityConfigOutputReference;

new DnsManagedZonePrivateVisibilityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters">putGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters">resetGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks">resetNetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGkeClusters` <a name="putGkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters"></a>

```java
public void putGkeClusters(IResolvable OR java.util.List<DnsManagedZonePrivateVisibilityConfigGkeClusters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>>

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks"></a>

```java
public void putNetworks(IResolvable OR java.util.List<DnsManagedZonePrivateVisibilityConfigNetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>>

---

##### `resetGkeClusters` <a name="resetGkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters"></a>

```java
public void resetGkeClusters()
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks"></a>

```java
public void resetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters">gkeClusters</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList">DnsManagedZonePrivateVisibilityConfigGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList">DnsManagedZonePrivateVisibilityConfigNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput">gkeClustersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput">networksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gkeClusters`<sup>Required</sup> <a name="gkeClusters" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters"></a>

```java
public DnsManagedZonePrivateVisibilityConfigGkeClustersList getGkeClusters();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClustersList">DnsManagedZonePrivateVisibilityConfigGkeClustersList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networks"></a>

```java
public DnsManagedZonePrivateVisibilityConfigNetworksList getNetworks();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworksList">DnsManagedZonePrivateVisibilityConfigNetworksList</a>

---

##### `gkeClustersInput`<sup>Optional</sup> <a name="gkeClustersInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput"></a>

```java
public java.lang.Object getGkeClustersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigGkeClusters">DnsManagedZonePrivateVisibilityConfigGkeClusters</a>>

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput"></a>

```java
public java.lang.Object getNetworksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigNetworks">DnsManagedZonePrivateVisibilityConfigNetworks</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue"></a>

```java
public DnsManagedZonePrivateVisibilityConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZonePrivateVisibilityConfig">DnsManagedZonePrivateVisibilityConfig</a>

---


### DnsManagedZoneTimeoutsOutputReference <a name="DnsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dns_managed_zone.DnsManagedZoneTimeoutsOutputReference;

new DnsManagedZoneTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.dnsManagedZone.DnsManagedZoneTimeouts">DnsManagedZoneTimeouts</a>

---



