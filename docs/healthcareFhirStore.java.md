# `healthcareFhirStore` Submodule <a name="`healthcareFhirStore` Submodule" id="@cdktf/provider-google.healthcareFhirStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareFhirStore <a name="HealthcareFhirStore" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store google_healthcare_fhir_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStore;

HealthcareFhirStore.Builder.create(Construct scope, java.lang.String id)
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
    .dataset(java.lang.String)
    .name(java.lang.String)
    .version(java.lang.String)
//  .complexDataTypeReferenceParsing(java.lang.String)
//  .defaultSearchHandlingStrict(java.lang.Boolean)
//  .defaultSearchHandlingStrict(IResolvable)
//  .disableReferentialIntegrity(java.lang.Boolean)
//  .disableReferentialIntegrity(IResolvable)
//  .disableResourceVersioning(java.lang.Boolean)
//  .disableResourceVersioning(IResolvable)
//  .enableHistoryImport(java.lang.Boolean)
//  .enableHistoryImport(IResolvable)
//  .enableUpdateCreate(java.lang.Boolean)
//  .enableUpdateCreate(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .notificationConfig(HealthcareFhirStoreNotificationConfig)
//  .notificationConfigs(IResolvable)
//  .notificationConfigs(java.util.List<HealthcareFhirStoreNotificationConfigs>)
//  .streamConfigs(IResolvable)
//  .streamConfigs(java.util.List<HealthcareFhirStoreStreamConfigs>)
//  .timeouts(HealthcareFhirStoreTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.dataset">dataset</a></code> | <code>java.lang.String</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name for the FhirStore. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"]. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.complexDataTypeReferenceParsing">complexDataTypeReferenceParsing</a></code> | <code>java.lang.String</code> | Enable parsing of references within complex FHIR data types such as Extensions. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.defaultSearchHandlingStrict">defaultSearchHandlingStrict</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.disableReferentialIntegrity">disableReferentialIntegrity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable referential integrity in this FHIR store. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.disableResourceVersioning">disableResourceVersioning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable resource versioning for this FHIR store. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.enableHistoryImport">enableHistoryImport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.enableUpdateCreate">enableUpdateCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this FHIR store has the updateCreate capability. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#id HealthcareFhirStore#id}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key-value pairs used to organize FHIR stores. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.notificationConfigs">notificationConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>></code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.streamConfigs">streamConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>></code> | stream_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.dataset"></a>

- *Type:* java.lang.String

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#dataset HealthcareFhirStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#name HealthcareFhirStore#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#version HealthcareFhirStore#version}

---

##### `complexDataTypeReferenceParsing`<sup>Optional</sup> <a name="complexDataTypeReferenceParsing" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.complexDataTypeReferenceParsing"></a>

- *Type:* java.lang.String

Enable parsing of references within complex FHIR data types such as Extensions.

If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#complex_data_type_reference_parsing HealthcareFhirStore#complex_data_type_reference_parsing}

---

##### `defaultSearchHandlingStrict`<sup>Optional</sup> <a name="defaultSearchHandlingStrict" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.defaultSearchHandlingStrict"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.

If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#default_search_handling_strict HealthcareFhirStore#default_search_handling_strict}

---

##### `disableReferentialIntegrity`<sup>Optional</sup> <a name="disableReferentialIntegrity" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.disableReferentialIntegrity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable referential integrity in this FHIR store.

This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#disable_referential_integrity HealthcareFhirStore#disable_referential_integrity}

---

##### `disableResourceVersioning`<sup>Optional</sup> <a name="disableResourceVersioning" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.disableResourceVersioning"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable resource versioning for this FHIR store.

This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#disable_resource_versioning HealthcareFhirStore#disable_resource_versioning}

---

##### `enableHistoryImport`<sup>Optional</sup> <a name="enableHistoryImport" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.enableHistoryImport"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store.

Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#enable_history_import HealthcareFhirStore#enable_history_import}

---

##### `enableUpdateCreate`<sup>Optional</sup> <a name="enableUpdateCreate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.enableUpdateCreate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this FHIR store has the updateCreate capability.

This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#enable_update_create HealthcareFhirStore#enable_update_create}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#id HealthcareFhirStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#labels HealthcareFhirStore#labels}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#notification_config HealthcareFhirStore#notification_config}

---

##### `notificationConfigs`<sup>Optional</sup> <a name="notificationConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.notificationConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>>

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#notification_configs HealthcareFhirStore#notification_configs}

---

##### `streamConfigs`<sup>Optional</sup> <a name="streamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.streamConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>>

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#stream_configs HealthcareFhirStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#timeouts HealthcareFhirStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfigs">putNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putStreamConfigs">putStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetComplexDataTypeReferenceParsing">resetComplexDataTypeReferenceParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDefaultSearchHandlingStrict">resetDefaultSearchHandlingStrict</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableReferentialIntegrity">resetDisableReferentialIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableResourceVersioning">resetDisableResourceVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableHistoryImport">resetEnableHistoryImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableUpdateCreate">resetEnableUpdateCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetNotificationConfigs">resetNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetStreamConfigs">resetStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfig"></a>

```java
public void putNotificationConfig(HealthcareFhirStoreNotificationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

---

##### `putNotificationConfigs` <a name="putNotificationConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfigs"></a>

```java
public void putNotificationConfigs(IResolvable OR java.util.List<HealthcareFhirStoreNotificationConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>>

---

##### `putStreamConfigs` <a name="putStreamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putStreamConfigs"></a>

```java
public void putStreamConfigs(IResolvable OR java.util.List<HealthcareFhirStoreStreamConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putStreamConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putTimeouts"></a>

```java
public void putTimeouts(HealthcareFhirStoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

---

##### `resetComplexDataTypeReferenceParsing` <a name="resetComplexDataTypeReferenceParsing" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetComplexDataTypeReferenceParsing"></a>

```java
public void resetComplexDataTypeReferenceParsing()
```

##### `resetDefaultSearchHandlingStrict` <a name="resetDefaultSearchHandlingStrict" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDefaultSearchHandlingStrict"></a>

```java
public void resetDefaultSearchHandlingStrict()
```

##### `resetDisableReferentialIntegrity` <a name="resetDisableReferentialIntegrity" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableReferentialIntegrity"></a>

```java
public void resetDisableReferentialIntegrity()
```

##### `resetDisableResourceVersioning` <a name="resetDisableResourceVersioning" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableResourceVersioning"></a>

```java
public void resetDisableResourceVersioning()
```

##### `resetEnableHistoryImport` <a name="resetEnableHistoryImport" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableHistoryImport"></a>

```java
public void resetEnableHistoryImport()
```

##### `resetEnableUpdateCreate` <a name="resetEnableUpdateCreate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableUpdateCreate"></a>

```java
public void resetEnableUpdateCreate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetNotificationConfig"></a>

```java
public void resetNotificationConfig()
```

##### `resetNotificationConfigs` <a name="resetNotificationConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetNotificationConfigs"></a>

```java
public void resetNotificationConfigs()
```

##### `resetStreamConfigs` <a name="resetStreamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetStreamConfigs"></a>

```java
public void resetStreamConfigs()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareFhirStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStore;

HealthcareFhirStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStore;

HealthcareFhirStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStore;

HealthcareFhirStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStore;

HealthcareFhirStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HealthcareFhirStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HealthcareFhirStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HealthcareFhirStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HealthcareFhirStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareFhirStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference">HealthcareFhirStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigs">notificationConfigs</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList">HealthcareFhirStoreNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigs">streamConfigs</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList">HealthcareFhirStoreStreamConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference">HealthcareFhirStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsingInput">complexDataTypeReferenceParsingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrictInput">defaultSearchHandlingStrictInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrityInput">disableReferentialIntegrityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioningInput">disableResourceVersioningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImportInput">enableHistoryImportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreateInput">enableUpdateCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigInput">notificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigsInput">notificationConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigsInput">streamConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsing">complexDataTypeReferenceParsing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrict">defaultSearchHandlingStrict</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrity">disableReferentialIntegrity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioning">disableResourceVersioning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImport">enableHistoryImport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreate">enableUpdateCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfig"></a>

```java
public HealthcareFhirStoreNotificationConfigOutputReference getNotificationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference">HealthcareFhirStoreNotificationConfigOutputReference</a>

---

##### `notificationConfigs`<sup>Required</sup> <a name="notificationConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigs"></a>

```java
public HealthcareFhirStoreNotificationConfigsList getNotificationConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList">HealthcareFhirStoreNotificationConfigsList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `streamConfigs`<sup>Required</sup> <a name="streamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigs"></a>

```java
public HealthcareFhirStoreStreamConfigsList getStreamConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList">HealthcareFhirStoreStreamConfigsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeouts"></a>

```java
public HealthcareFhirStoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference">HealthcareFhirStoreTimeoutsOutputReference</a>

---

##### `complexDataTypeReferenceParsingInput`<sup>Optional</sup> <a name="complexDataTypeReferenceParsingInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsingInput"></a>

```java
public java.lang.String getComplexDataTypeReferenceParsingInput();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `defaultSearchHandlingStrictInput`<sup>Optional</sup> <a name="defaultSearchHandlingStrictInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrictInput"></a>

```java
public java.lang.Object getDefaultSearchHandlingStrictInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableReferentialIntegrityInput`<sup>Optional</sup> <a name="disableReferentialIntegrityInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrityInput"></a>

```java
public java.lang.Object getDisableReferentialIntegrityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableResourceVersioningInput`<sup>Optional</sup> <a name="disableResourceVersioningInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioningInput"></a>

```java
public java.lang.Object getDisableResourceVersioningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHistoryImportInput`<sup>Optional</sup> <a name="enableHistoryImportInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImportInput"></a>

```java
public java.lang.Object getEnableHistoryImportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUpdateCreateInput`<sup>Optional</sup> <a name="enableUpdateCreateInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreateInput"></a>

```java
public java.lang.Object getEnableUpdateCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigInput"></a>

```java
public HealthcareFhirStoreNotificationConfig getNotificationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

---

##### `notificationConfigsInput`<sup>Optional</sup> <a name="notificationConfigsInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigsInput"></a>

```java
public java.lang.Object getNotificationConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>>

---

##### `streamConfigsInput`<sup>Optional</sup> <a name="streamConfigsInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigsInput"></a>

```java
public java.lang.Object getStreamConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `complexDataTypeReferenceParsing`<sup>Required</sup> <a name="complexDataTypeReferenceParsing" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsing"></a>

```java
public java.lang.String getComplexDataTypeReferenceParsing();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `defaultSearchHandlingStrict`<sup>Required</sup> <a name="defaultSearchHandlingStrict" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrict"></a>

```java
public java.lang.Object getDefaultSearchHandlingStrict();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableReferentialIntegrity`<sup>Required</sup> <a name="disableReferentialIntegrity" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrity"></a>

```java
public java.lang.Object getDisableReferentialIntegrity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableResourceVersioning`<sup>Required</sup> <a name="disableResourceVersioning" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioning"></a>

```java
public java.lang.Object getDisableResourceVersioning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHistoryImport`<sup>Required</sup> <a name="enableHistoryImport" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImport"></a>

```java
public java.lang.Object getEnableHistoryImport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUpdateCreate`<sup>Required</sup> <a name="enableUpdateCreate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreate"></a>

```java
public java.lang.Object getEnableUpdateCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareFhirStoreConfig <a name="HealthcareFhirStoreConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreConfig;

HealthcareFhirStoreConfig.builder()
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
    .dataset(java.lang.String)
    .name(java.lang.String)
    .version(java.lang.String)
//  .complexDataTypeReferenceParsing(java.lang.String)
//  .defaultSearchHandlingStrict(java.lang.Boolean)
//  .defaultSearchHandlingStrict(IResolvable)
//  .disableReferentialIntegrity(java.lang.Boolean)
//  .disableReferentialIntegrity(IResolvable)
//  .disableResourceVersioning(java.lang.Boolean)
//  .disableResourceVersioning(IResolvable)
//  .enableHistoryImport(java.lang.Boolean)
//  .enableHistoryImport(IResolvable)
//  .enableUpdateCreate(java.lang.Boolean)
//  .enableUpdateCreate(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .notificationConfig(HealthcareFhirStoreNotificationConfig)
//  .notificationConfigs(IResolvable)
//  .notificationConfigs(java.util.List<HealthcareFhirStoreNotificationConfigs>)
//  .streamConfigs(IResolvable)
//  .streamConfigs(java.util.List<HealthcareFhirStoreStreamConfigs>)
//  .timeouts(HealthcareFhirStoreTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dataset">dataset</a></code> | <code>java.lang.String</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name for the FhirStore. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.version">version</a></code> | <code>java.lang.String</code> | The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"]. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing">complexDataTypeReferenceParsing</a></code> | <code>java.lang.String</code> | Enable parsing of references within complex FHIR data types such as Extensions. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.defaultSearchHandlingStrict">defaultSearchHandlingStrict</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableReferentialIntegrity">disableReferentialIntegrity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable referential integrity in this FHIR store. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableResourceVersioning">disableResourceVersioning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable resource versioning for this FHIR store. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableHistoryImport">enableHistoryImport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableUpdateCreate">enableUpdateCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this FHIR store has the updateCreate capability. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#id HealthcareFhirStore#id}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key-value pairs used to organize FHIR stores. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.notificationConfigs">notificationConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>></code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.streamConfigs">streamConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>></code> | stream_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#dataset HealthcareFhirStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#name HealthcareFhirStore#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#version HealthcareFhirStore#version}

---

##### `complexDataTypeReferenceParsing`<sup>Optional</sup> <a name="complexDataTypeReferenceParsing" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing"></a>

```java
public java.lang.String getComplexDataTypeReferenceParsing();
```

- *Type:* java.lang.String

Enable parsing of references within complex FHIR data types such as Extensions.

If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#complex_data_type_reference_parsing HealthcareFhirStore#complex_data_type_reference_parsing}

---

##### `defaultSearchHandlingStrict`<sup>Optional</sup> <a name="defaultSearchHandlingStrict" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.defaultSearchHandlingStrict"></a>

```java
public java.lang.Object getDefaultSearchHandlingStrict();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.

If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#default_search_handling_strict HealthcareFhirStore#default_search_handling_strict}

---

##### `disableReferentialIntegrity`<sup>Optional</sup> <a name="disableReferentialIntegrity" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableReferentialIntegrity"></a>

```java
public java.lang.Object getDisableReferentialIntegrity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable referential integrity in this FHIR store.

This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#disable_referential_integrity HealthcareFhirStore#disable_referential_integrity}

---

##### `disableResourceVersioning`<sup>Optional</sup> <a name="disableResourceVersioning" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableResourceVersioning"></a>

```java
public java.lang.Object getDisableResourceVersioning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable resource versioning for this FHIR store.

This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#disable_resource_versioning HealthcareFhirStore#disable_resource_versioning}

---

##### `enableHistoryImport`<sup>Optional</sup> <a name="enableHistoryImport" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableHistoryImport"></a>

```java
public java.lang.Object getEnableHistoryImport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store.

Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#enable_history_import HealthcareFhirStore#enable_history_import}

---

##### `enableUpdateCreate`<sup>Optional</sup> <a name="enableUpdateCreate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableUpdateCreate"></a>

```java
public java.lang.Object getEnableUpdateCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this FHIR store has the updateCreate capability.

This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#enable_update_create HealthcareFhirStore#enable_update_create}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#id HealthcareFhirStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#labels HealthcareFhirStore#labels}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.notificationConfig"></a>

```java
public HealthcareFhirStoreNotificationConfig getNotificationConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#notification_config HealthcareFhirStore#notification_config}

---

##### `notificationConfigs`<sup>Optional</sup> <a name="notificationConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.notificationConfigs"></a>

```java
public java.lang.Object getNotificationConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>>

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#notification_configs HealthcareFhirStore#notification_configs}

---

##### `streamConfigs`<sup>Optional</sup> <a name="streamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.streamConfigs"></a>

```java
public java.lang.Object getStreamConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>>

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#stream_configs HealthcareFhirStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.timeouts"></a>

```java
public HealthcareFhirStoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#timeouts HealthcareFhirStore#timeouts}

---

### HealthcareFhirStoreNotificationConfig <a name="HealthcareFhirStoreNotificationConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreNotificationConfig;

HealthcareFhirStoreNotificationConfig.builder()
    .pubsubTopic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#pubsub_topic HealthcareFhirStore#pubsub_topic}

---

### HealthcareFhirStoreNotificationConfigs <a name="HealthcareFhirStoreNotificationConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreNotificationConfigs;

HealthcareFhirStoreNotificationConfigs.builder()
    .pubsubTopic(java.lang.String)
//  .sendFullResource(java.lang.Boolean)
//  .sendFullResource(IResolvable)
//  .sendPreviousResourceOnDelete(java.lang.Boolean)
//  .sendPreviousResourceOnDelete(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.sendFullResource">sendFullResource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete">sendPreviousResourceOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#pubsub_topic HealthcareFhirStore#pubsub_topic}

---

##### `sendFullResource`<sup>Optional</sup> <a name="sendFullResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.sendFullResource"></a>

```java
public java.lang.Object getSendFullResource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation.

Note that setting this to true does not guarantee that all resources will be sent in the format of
full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be
sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether
it needs to fetch the full resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#send_full_resource HealthcareFhirStore#send_full_resource}

---

##### `sendPreviousResourceOnDelete`<sup>Optional</sup> <a name="sendPreviousResourceOnDelete" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete"></a>

```java
public java.lang.Object getSendPreviousResourceOnDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource.

Note that setting this to
true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a
resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always
check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous
resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#send_previous_resource_on_delete HealthcareFhirStore#send_previous_resource_on_delete}

---

### HealthcareFhirStoreStreamConfigs <a name="HealthcareFhirStoreStreamConfigs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreStreamConfigs;

HealthcareFhirStoreStreamConfigs.builder()
    .bigqueryDestination(HealthcareFhirStoreStreamConfigsBigqueryDestination)
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Supply a FHIR resource type (such as "Patient" or "Observation"). |

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.bigqueryDestination"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestination getBigqueryDestination();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#bigquery_destination HealthcareFhirStore#bigquery_destination}

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Supply a FHIR resource type (such as "Patient" or "Observation").

See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#resource_types HealthcareFhirStore#resource_types}

---

### HealthcareFhirStoreStreamConfigsBigqueryDestination <a name="HealthcareFhirStoreStreamConfigsBigqueryDestination" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreStreamConfigsBigqueryDestination;

HealthcareFhirStoreStreamConfigsBigqueryDestination.builder()
    .datasetUri(java.lang.String)
    .schemaConfig(HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri">datasetUri</a></code> | <code>java.lang.String</code> | BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig">schemaConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | schema_config block. |

---

##### `datasetUri`<sup>Required</sup> <a name="datasetUri" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri"></a>

```java
public java.lang.String getDatasetUri();
```

- *Type:* java.lang.String

BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#dataset_uri HealthcareFhirStore#dataset_uri}

---

##### `schemaConfig`<sup>Required</sup> <a name="schemaConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig getSchemaConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

schema_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#schema_config HealthcareFhirStore#schema_config}

---

### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;

HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.builder()
    .recursiveStructureDepth(java.lang.Number)
//  .lastUpdatedPartitionConfig(HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig)
//  .schemaType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth">recursiveStructureDepth</a></code> | <code>java.lang.Number</code> | The depth for all recursive structures in the output analytics schema. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig">lastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | last_updated_partition_config block. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType">schemaType</a></code> | <code>java.lang.String</code> | Specifies the output schema type. |

---

##### `recursiveStructureDepth`<sup>Required</sup> <a name="recursiveStructureDepth" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth"></a>

```java
public java.lang.Number getRecursiveStructureDepth();
```

- *Type:* java.lang.Number

The depth for all recursive structures in the output analytics schema.

For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#recursive_structure_depth HealthcareFhirStore#recursive_structure_depth}

---

##### `lastUpdatedPartitionConfig`<sup>Optional</sup> <a name="lastUpdatedPartitionConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig getLastUpdatedPartitionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

last_updated_partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#last_updated_partition_config HealthcareFhirStore#last_updated_partition_config}

---

##### `schemaType`<sup>Optional</sup> <a name="schemaType" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType"></a>

```java
public java.lang.String getSchemaType();
```

- *Type:* java.lang.String

Specifies the output schema type.

* ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
* ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
* LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#schema_type HealthcareFhirStore#schema_type}

---

### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;

HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.builder()
    .type(java.lang.String)
//  .expirationMs(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"]. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs">expirationMs</a></code> | <code>java.lang.String</code> | Number of milliseconds for which to keep the storage for a partition. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#type HealthcareFhirStore#type}

---

##### `expirationMs`<sup>Optional</sup> <a name="expirationMs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs"></a>

```java
public java.lang.String getExpirationMs();
```

- *Type:* java.lang.String

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#expiration_ms HealthcareFhirStore#expiration_ms}

---

### HealthcareFhirStoreTimeouts <a name="HealthcareFhirStoreTimeouts" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreTimeouts;

HealthcareFhirStoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#create HealthcareFhirStore#create}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#delete HealthcareFhirStore#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#update HealthcareFhirStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#create HealthcareFhirStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#delete HealthcareFhirStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/healthcare_fhir_store#update HealthcareFhirStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareFhirStoreNotificationConfigOutputReference <a name="HealthcareFhirStoreNotificationConfigOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreNotificationConfigOutputReference;

new HealthcareFhirStoreNotificationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.internalValue"></a>

```java
public HealthcareFhirStoreNotificationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

---


### HealthcareFhirStoreNotificationConfigsList <a name="HealthcareFhirStoreNotificationConfigsList" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreNotificationConfigsList;

new HealthcareFhirStoreNotificationConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.get"></a>

```java
public HealthcareFhirStoreNotificationConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>>

---


### HealthcareFhirStoreNotificationConfigsOutputReference <a name="HealthcareFhirStoreNotificationConfigsOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreNotificationConfigsOutputReference;

new HealthcareFhirStoreNotificationConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource">resetSendFullResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete">resetSendPreviousResourceOnDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSendFullResource` <a name="resetSendFullResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource"></a>

```java
public void resetSendFullResource()
```

##### `resetSendPreviousResourceOnDelete` <a name="resetSendPreviousResourceOnDelete" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete"></a>

```java
public void resetSendPreviousResourceOnDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput">sendFullResourceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput">sendPreviousResourceOnDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource">sendFullResource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete">sendPreviousResourceOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `sendFullResourceInput`<sup>Optional</sup> <a name="sendFullResourceInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput"></a>

```java
public java.lang.Object getSendFullResourceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendPreviousResourceOnDeleteInput`<sup>Optional</sup> <a name="sendPreviousResourceOnDeleteInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput"></a>

```java
public java.lang.Object getSendPreviousResourceOnDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

##### `sendFullResource`<sup>Required</sup> <a name="sendFullResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource"></a>

```java
public java.lang.Object getSendFullResource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendPreviousResourceOnDelete`<sup>Required</sup> <a name="sendPreviousResourceOnDelete" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete"></a>

```java
public java.lang.Object getSendPreviousResourceOnDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>

---


### HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference;

new HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig">putSchemaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaConfig` <a name="putSchemaConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig"></a>

```java
public void putSchemaConfig(HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig">schemaConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput">datasetUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput">schemaConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri">datasetUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schemaConfig`<sup>Required</sup> <a name="schemaConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference getSchemaConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a>

---

##### `datasetUriInput`<sup>Optional</sup> <a name="datasetUriInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput"></a>

```java
public java.lang.String getDatasetUriInput();
```

- *Type:* java.lang.String

---

##### `schemaConfigInput`<sup>Optional</sup> <a name="schemaConfigInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig getSchemaConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---

##### `datasetUri`<sup>Required</sup> <a name="datasetUri" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri"></a>

```java
public java.lang.String getDatasetUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---


### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference;

new HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs">resetExpirationMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationMs` <a name="resetExpirationMs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs"></a>

```java
public void resetExpirationMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput">expirationMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs">expirationMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationMsInput`<sup>Optional</sup> <a name="expirationMsInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput"></a>

```java
public java.lang.String getExpirationMsInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expirationMs`<sup>Required</sup> <a name="expirationMs" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs"></a>

```java
public java.lang.String getExpirationMs();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---


### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference;

new HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig">putLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig">resetLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType">resetSchemaType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLastUpdatedPartitionConfig` <a name="putLastUpdatedPartitionConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig"></a>

```java
public void putLastUpdatedPartitionConfig(HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `resetLastUpdatedPartitionConfig` <a name="resetLastUpdatedPartitionConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig"></a>

```java
public void resetLastUpdatedPartitionConfig()
```

##### `resetSchemaType` <a name="resetSchemaType" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType"></a>

```java
public void resetSchemaType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig">lastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput">lastUpdatedPartitionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput">recursiveStructureDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput">schemaTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth">recursiveStructureDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType">schemaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastUpdatedPartitionConfig`<sup>Required</sup> <a name="lastUpdatedPartitionConfig" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference getLastUpdatedPartitionConfig();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a>

---

##### `lastUpdatedPartitionConfigInput`<sup>Optional</sup> <a name="lastUpdatedPartitionConfigInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig getLastUpdatedPartitionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `recursiveStructureDepthInput`<sup>Optional</sup> <a name="recursiveStructureDepthInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput"></a>

```java
public java.lang.Number getRecursiveStructureDepthInput();
```

- *Type:* java.lang.Number

---

##### `schemaTypeInput`<sup>Optional</sup> <a name="schemaTypeInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput"></a>

```java
public java.lang.String getSchemaTypeInput();
```

- *Type:* java.lang.String

---

##### `recursiveStructureDepth`<sup>Required</sup> <a name="recursiveStructureDepth" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth"></a>

```java
public java.lang.Number getRecursiveStructureDepth();
```

- *Type:* java.lang.Number

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType"></a>

```java
public java.lang.String getSchemaType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


### HealthcareFhirStoreStreamConfigsList <a name="HealthcareFhirStoreStreamConfigsList" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreStreamConfigsList;

new HealthcareFhirStoreStreamConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.get"></a>

```java
public HealthcareFhirStoreStreamConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>>

---


### HealthcareFhirStoreStreamConfigsOutputReference <a name="HealthcareFhirStoreStreamConfigsOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreStreamConfigsOutputReference;

new HealthcareFhirStoreStreamConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination">putBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigqueryDestination` <a name="putBigqueryDestination" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination"></a>

```java
public void putBigqueryDestination(HealthcareFhirStoreStreamConfigsBigqueryDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput">bigqueryDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference getBigqueryDestination();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a>

---

##### `bigqueryDestinationInput`<sup>Optional</sup> <a name="bigqueryDestinationInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput"></a>

```java
public HealthcareFhirStoreStreamConfigsBigqueryDestination getBigqueryDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>

---


### HealthcareFhirStoreTimeoutsOutputReference <a name="HealthcareFhirStoreTimeoutsOutputReference" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.healthcare_fhir_store.HealthcareFhirStoreTimeoutsOutputReference;

new HealthcareFhirStoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

---



