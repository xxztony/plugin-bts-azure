/*
 * This file is generated by jOOQ.
 */
package com.epam.reportportal.extension.example.jooq;


import javax.annotation.processing.Generated;

import org.jooq.Sequence;
import org.jooq.impl.SequenceImpl;


/**
 * Convenience access to all sequences in example
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.12.4"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Sequences {

    /**
     * The sequence <code>example.entity_id_seq</code>
     */
    public static final Sequence<Long> ENTITY_ID_SEQ = new SequenceImpl<Long>("entity_id_seq", JExample.EXAMPLE, org.jooq.impl.SQLDataType.BIGINT.nullable(false));
}