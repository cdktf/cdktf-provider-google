# `google_apigee_keystores_aliases_self_signed_cert`

Refer to the Terraform Registory for docs: [`google_apigee_keystores_aliases_self_signed_cert`](https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert).

# `apigeeKeystoresAliasesSelfSignedCert` Submodule <a name="`apigeeKeystoresAliasesSelfSignedCert` Submodule" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeKeystoresAliasesSelfSignedCert <a name="ApigeeKeystoresAliasesSelfSignedCert" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert google_apigee_keystores_aliases_self_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCert;

ApigeeKeystoresAliasesSelfSignedCert.Builder.create(Construct scope, java.lang.String id)
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
    .alias(java.lang.String)
    .environment(java.lang.String)
    .keystore(java.lang.String)
    .orgId(java.lang.String)
    .sigAlg(java.lang.String)
    .subject(ApigeeKeystoresAliasesSelfSignedCertSubject)
//  .certValidityInDays(java.lang.Number)
//  .id(java.lang.String)
//  .keySize(java.lang.String)
//  .subjectAlternativeDnsNames(ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames)
//  .timeouts(ApigeeKeystoresAliasesSelfSignedCertTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias for the key/certificate pair. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The Apigee environment name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keystore">keystore</a></code> | <code>java.lang.String</code> | The Apigee keystore name associated in an Apigee environment. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization name associated with the Apigee environment. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.sigAlg">sigAlg</a></code> | <code>java.lang.String</code> | Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subject">subject</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.certValidityInDays">certValidityInDays</a></code> | <code>java.lang.Number</code> | Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keySize">keySize</a></code> | <code>java.lang.String</code> | Key size. Default and maximum value is 2048 bits. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subjectAlternativeDnsNames">subjectAlternativeDnsNames</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | subject_alternative_dns_names block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias for the key/certificate pair.

Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#alias ApigeeKeystoresAliasesSelfSignedCert#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#environment ApigeeKeystoresAliasesSelfSignedCert#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keystore"></a>

- *Type:* java.lang.String

The Apigee keystore name associated in an Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#keystore ApigeeKeystoresAliasesSelfSignedCert#keystore}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization name associated with the Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org_id ApigeeKeystoresAliasesSelfSignedCert#org_id}

---

##### `sigAlg`<sup>Required</sup> <a name="sigAlg" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.sigAlg"></a>

- *Type:* java.lang.String

Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#sig_alg ApigeeKeystoresAliasesSelfSignedCert#sig_alg}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subject"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject ApigeeKeystoresAliasesSelfSignedCert#subject}

---

##### `certValidityInDays`<sup>Optional</sup> <a name="certValidityInDays" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.certValidityInDays"></a>

- *Type:* java.lang.Number

Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#cert_validity_in_days ApigeeKeystoresAliasesSelfSignedCert#cert_validity_in_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keySize"></a>

- *Type:* java.lang.String

Key size. Default and maximum value is 2048 bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#key_size ApigeeKeystoresAliasesSelfSignedCert#key_size}

---

##### `subjectAlternativeDnsNames`<sup>Optional</sup> <a name="subjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subjectAlternativeDnsNames"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

subject_alternative_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject_alternative_dns_names ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_dns_names}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#timeouts ApigeeKeystoresAliasesSelfSignedCert#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames">putSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetCertValidityInDays">resetCertValidityInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetSubjectAlternativeDnsNames">resetSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putSubject` <a name="putSubject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject"></a>

```java
public void putSubject(ApigeeKeystoresAliasesSelfSignedCertSubject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

---

##### `putSubjectAlternativeDnsNames` <a name="putSubjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames"></a>

```java
public void putSubjectAlternativeDnsNames(ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putTimeouts"></a>

```java
public void putTimeouts(ApigeeKeystoresAliasesSelfSignedCertTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

---

##### `resetCertValidityInDays` <a name="resetCertValidityInDays" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetCertValidityInDays"></a>

```java
public void resetCertValidityInDays()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetId"></a>

```java
public void resetId()
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetKeySize"></a>

```java
public void resetKeySize()
```

##### `resetSubjectAlternativeDnsNames` <a name="resetSubjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetSubjectAlternativeDnsNames"></a>

```java
public void resetSubjectAlternativeDnsNames()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeKeystoresAliasesSelfSignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCert;

ApigeeKeystoresAliasesSelfSignedCert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCert;

ApigeeKeystoresAliasesSelfSignedCert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCert;

ApigeeKeystoresAliasesSelfSignedCert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCert;

ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigeeKeystoresAliasesSelfSignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeKeystoresAliasesSelfSignedCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeKeystoresAliasesSelfSignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeKeystoresAliasesSelfSignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certsInfo">certsInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNames">subjectAlternativeDnsNames</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference">ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDaysInput">certValidityInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySizeInput">keySizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystoreInput">keystoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlgInput">sigAlgInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNamesInput">subjectAlternativeDnsNamesInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectInput">subjectInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDays">certValidityInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySize">keySize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystore">keystore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlg">sigAlg</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certsInfo`<sup>Required</sup> <a name="certsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certsInfo"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertCertsInfoList getCertsInfo();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoList</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subject"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference getSubject();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference</a>

---

##### `subjectAlternativeDnsNames`<sup>Required</sup> <a name="subjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNames"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference getSubjectAlternativeDnsNames();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeouts"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference">ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `certValidityInDaysInput`<sup>Optional</sup> <a name="certValidityInDaysInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDaysInput"></a>

```java
public java.lang.Number getCertValidityInDaysInput();
```

- *Type:* java.lang.Number

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySizeInput"></a>

```java
public java.lang.String getKeySizeInput();
```

- *Type:* java.lang.String

---

##### `keystoreInput`<sup>Optional</sup> <a name="keystoreInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystoreInput"></a>

```java
public java.lang.String getKeystoreInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `sigAlgInput`<sup>Optional</sup> <a name="sigAlgInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlgInput"></a>

```java
public java.lang.String getSigAlgInput();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeDnsNamesInput`<sup>Optional</sup> <a name="subjectAlternativeDnsNamesInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNamesInput"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames getSubjectAlternativeDnsNamesInput();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectInput"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertSubject getSubjectInput();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `certValidityInDays`<sup>Required</sup> <a name="certValidityInDays" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDays"></a>

```java
public java.lang.Number getCertValidityInDays();
```

- *Type:* java.lang.Number

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySize"></a>

```java
public java.lang.String getKeySize();
```

- *Type:* java.lang.String

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystore"></a>

```java
public java.lang.String getKeystore();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `sigAlg`<sup>Required</sup> <a name="sigAlg" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlg"></a>

```java
public java.lang.String getSigAlg();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeKeystoresAliasesSelfSignedCertCertsInfo <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo;

ApigeeKeystoresAliasesSelfSignedCertCertsInfo.builder()
    .build();
```


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo;

ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo.builder()
    .build();
```


### ApigeeKeystoresAliasesSelfSignedCertConfig <a name="ApigeeKeystoresAliasesSelfSignedCertConfig" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertConfig;

ApigeeKeystoresAliasesSelfSignedCertConfig.builder()
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
    .alias(java.lang.String)
    .environment(java.lang.String)
    .keystore(java.lang.String)
    .orgId(java.lang.String)
    .sigAlg(java.lang.String)
    .subject(ApigeeKeystoresAliasesSelfSignedCertSubject)
//  .certValidityInDays(java.lang.Number)
//  .id(java.lang.String)
//  .keySize(java.lang.String)
//  .subjectAlternativeDnsNames(ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames)
//  .timeouts(ApigeeKeystoresAliasesSelfSignedCertTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias for the key/certificate pair. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The Apigee environment name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keystore">keystore</a></code> | <code>java.lang.String</code> | The Apigee keystore name associated in an Apigee environment. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization name associated with the Apigee environment. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.sigAlg">sigAlg</a></code> | <code>java.lang.String</code> | Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.certValidityInDays">certValidityInDays</a></code> | <code>java.lang.Number</code> | Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keySize">keySize</a></code> | <code>java.lang.String</code> | Key size. Default and maximum value is 2048 bits. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subjectAlternativeDnsNames">subjectAlternativeDnsNames</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | subject_alternative_dns_names block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias for the key/certificate pair.

Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#alias ApigeeKeystoresAliasesSelfSignedCert#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#environment ApigeeKeystoresAliasesSelfSignedCert#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keystore"></a>

```java
public java.lang.String getKeystore();
```

- *Type:* java.lang.String

The Apigee keystore name associated in an Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#keystore ApigeeKeystoresAliasesSelfSignedCert#keystore}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization name associated with the Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org_id ApigeeKeystoresAliasesSelfSignedCert#org_id}

---

##### `sigAlg`<sup>Required</sup> <a name="sigAlg" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.sigAlg"></a>

```java
public java.lang.String getSigAlg();
```

- *Type:* java.lang.String

Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#sig_alg ApigeeKeystoresAliasesSelfSignedCert#sig_alg}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subject"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertSubject getSubject();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject ApigeeKeystoresAliasesSelfSignedCert#subject}

---

##### `certValidityInDays`<sup>Optional</sup> <a name="certValidityInDays" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.certValidityInDays"></a>

```java
public java.lang.Number getCertValidityInDays();
```

- *Type:* java.lang.Number

Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#cert_validity_in_days ApigeeKeystoresAliasesSelfSignedCert#cert_validity_in_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keySize"></a>

```java
public java.lang.String getKeySize();
```

- *Type:* java.lang.String

Key size. Default and maximum value is 2048 bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#key_size ApigeeKeystoresAliasesSelfSignedCert#key_size}

---

##### `subjectAlternativeDnsNames`<sup>Optional</sup> <a name="subjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subjectAlternativeDnsNames"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames getSubjectAlternativeDnsNames();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

subject_alternative_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject_alternative_dns_names ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_dns_names}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.timeouts"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#timeouts ApigeeKeystoresAliasesSelfSignedCert#timeouts}

---

### ApigeeKeystoresAliasesSelfSignedCertSubject <a name="ApigeeKeystoresAliasesSelfSignedCertSubject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertSubject;

ApigeeKeystoresAliasesSelfSignedCertSubject.builder()
//  .commonName(java.lang.String)
//  .countryCode(java.lang.String)
//  .email(java.lang.String)
//  .locality(java.lang.String)
//  .org(java.lang.String)
//  .orgUnit(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Common name of the organization. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Two-letter country code. Example, IN for India, US for United States of America. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.email">email</a></code> | <code>java.lang.String</code> | Email address. Max 255 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.locality">locality</a></code> | <code>java.lang.String</code> | City or town name. Maximum length is 128 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.org">org</a></code> | <code>java.lang.String</code> | Organization name. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.orgUnit">orgUnit</a></code> | <code>java.lang.String</code> | Organization team name. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.state">state</a></code> | <code>java.lang.String</code> | State or district name. Maximum length is 128 characters. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Common name of the organization. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#common_name ApigeeKeystoresAliasesSelfSignedCert#common_name}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Two-letter country code. Example, IN for India, US for United States of America.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#country_code ApigeeKeystoresAliasesSelfSignedCert#country_code}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address. Max 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#email ApigeeKeystoresAliasesSelfSignedCert#email}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

City or town name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#locality ApigeeKeystoresAliasesSelfSignedCert#locality}

---

##### `org`<sup>Optional</sup> <a name="org" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.org"></a>

```java
public java.lang.String getOrg();
```

- *Type:* java.lang.String

Organization name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org ApigeeKeystoresAliasesSelfSignedCert#org}

---

##### `orgUnit`<sup>Optional</sup> <a name="orgUnit" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.orgUnit"></a>

```java
public java.lang.String getOrgUnit();
```

- *Type:* java.lang.String

Organization team name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org_unit ApigeeKeystoresAliasesSelfSignedCert#org_unit}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

State or district name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#state ApigeeKeystoresAliasesSelfSignedCert#state}

---

### ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames <a name="ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames;

ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.builder()
//  .subjectAlternativeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.property.subjectAlternativeName">subjectAlternativeName</a></code> | <code>java.lang.String</code> | Subject Alternative Name. |

---

##### `subjectAlternativeName`<sup>Optional</sup> <a name="subjectAlternativeName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.property.subjectAlternativeName"></a>

```java
public java.lang.String getSubjectAlternativeName();
```

- *Type:* java.lang.String

Subject Alternative Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject_alternative_name ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_name}

---

### ApigeeKeystoresAliasesSelfSignedCertTimeouts <a name="ApigeeKeystoresAliasesSelfSignedCertTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertTimeouts;

ApigeeKeystoresAliasesSelfSignedCertTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#create ApigeeKeystoresAliasesSelfSignedCert#create}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#delete ApigeeKeystoresAliasesSelfSignedCert#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#create ApigeeKeystoresAliasesSelfSignedCert#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_keystores_aliases_self_signed_cert#delete ApigeeKeystoresAliasesSelfSignedCert#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList;

new ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference;

new ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.basicConstraints">basicConstraints</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.expiryDate">expiryDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.isValid">isValid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.sigAlgName">sigAlgName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.validFrom">validFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicConstraints`<sup>Required</sup> <a name="basicConstraints" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.basicConstraints"></a>

```java
public java.lang.String getBasicConstraints();
```

- *Type:* java.lang.String

---

##### `expiryDate`<sup>Required</sup> <a name="expiryDate" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.expiryDate"></a>

```java
public java.lang.String getExpiryDate();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.isValid"></a>

```java
public java.lang.String getIsValid();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `sigAlgName`<sup>Required</sup> <a name="sigAlgName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.sigAlgName"></a>

```java
public java.lang.String getSigAlgName();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `validFrom`<sup>Required</sup> <a name="validFrom" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.validFrom"></a>

```java
public java.lang.String getValidFrom();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.internalValue"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo</a>

---


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoList <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList;

new ApigeeKeystoresAliasesSelfSignedCertCertsInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference;

new ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.certInfo">certInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInfo`<sup>Required</sup> <a name="certInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.certInfo"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList getCertInfo();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.internalValue"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertCertsInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfo</a>

---


### ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference;

new ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resetSubjectAlternativeName">resetSubjectAlternativeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubjectAlternativeName` <a name="resetSubjectAlternativeName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resetSubjectAlternativeName"></a>

```java
public void resetSubjectAlternativeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeNameInput">subjectAlternativeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeName">subjectAlternativeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNameInput`<sup>Optional</sup> <a name="subjectAlternativeNameInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeNameInput"></a>

```java
public java.lang.String getSubjectAlternativeNameInput();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeName`<sup>Required</sup> <a name="subjectAlternativeName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeName"></a>

```java
public java.lang.String getSubjectAlternativeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.internalValue"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---


### ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference;

new ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrg">resetOrg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrgUnit">resetOrgUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrg` <a name="resetOrg" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrg"></a>

```java
public void resetOrg()
```

##### `resetOrgUnit` <a name="resetOrgUnit" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrgUnit"></a>

```java
public void resetOrgUnit()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgInput">orgInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnitInput">orgUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.org">org</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnit">orgUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `orgInput`<sup>Optional</sup> <a name="orgInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgInput"></a>

```java
public java.lang.String getOrgInput();
```

- *Type:* java.lang.String

---

##### `orgUnitInput`<sup>Optional</sup> <a name="orgUnitInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnitInput"></a>

```java
public java.lang.String getOrgUnitInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.org"></a>

```java
public java.lang.String getOrg();
```

- *Type:* java.lang.String

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnit"></a>

```java
public java.lang.String getOrgUnit();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.internalValue"></a>

```java
public ApigeeKeystoresAliasesSelfSignedCertSubject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

---


### ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_keystores_aliases_self_signed_cert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference;

new ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

---



